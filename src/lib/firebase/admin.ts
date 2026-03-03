import { initFirestore } from "@auth/firebase-adapter";

// This expects either FIREBASE_SERVICE_ACCOUNT_KEY in the environment
// (JSON stringified service account) or FIREBASE_PROJECT_ID.
export const firestore = initFirestore({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || process.env.FIREBASE_PROJECT_ID,
});
