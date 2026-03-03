import NextAuth from "next-auth"
import { FirestoreAdapter } from "@auth/firebase-adapter"
import Google from "next-auth/providers/google"
import Slack from "next-auth/providers/slack"
import Entra from "next-auth/providers/microsoft-entra-id"
import { firestore } from "./lib/firebase/admin"

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: FirestoreAdapter(firestore),
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                    scope: "openid profile email https://www.googleapis.com/auth/gmail.modify",
                },
            },
        }),
        Entra({
            clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
            clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
            issuer: `https://login.microsoftonline.com/${process.env.AUTH_MICROSOFT_ENTRA_ID_TENANT_ID}/v2.0`,
            authorization: {
                params: {
                    scope: "openid profile email Mail.ReadWrite Mail.Send offline_access",
                },
            },
        }),
        Slack({
            clientId: process.env.SLACK_CLIENT_ID,
            clientSecret: process.env.SLACK_CLIENT_SECRET,
            authorization: {
                params: {
                    scope: "openid profile email", // Basic login scopes
                },
            },
        }),
    ],
    callbacks: {
        async session({ session, user }) {
            if (session.user) {
                session.user.id = user.id
            }
            return session
        },
    },
})
