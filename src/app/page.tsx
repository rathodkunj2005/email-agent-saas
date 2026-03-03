import { auth, signIn, signOut } from "@/auth"

export default async function Home() {
  const session = await auth()

  return (
    <main className="min-h-screen p-8 bg-gray-50 flex flex-col items-center">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
        <h1 className="text-3xl font-bold font-mono tracking-tight text-gray-900 mb-2">
          Email Agent SaaS
        </h1>
        <p className="text-gray-500 mb-8 border-b pb-8">Manage your integrations and agent settings.</p>

        {session ? (
          <div>
            <div className="flex items-center justify-between bg-blue-50 text-blue-900 p-4 rounded-lg mb-8">
              <div>
                <p className="font-semibold text-sm">Logged in as</p>
                <p className="font-mono text-sm">{session.user?.email}</p>
              </div>
              <form
                action={async () => {
                  "use server"
                  await signOut()
                }}
              >
                <button type="submit" className="text-sm bg-white border border-blue-200 px-4 py-2 rounded shadow-sm hover:bg-gray-50 transition">
                  Sign Out
                </button>
              </form>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold mb-4">Connect Integrations</h2>
              {/* Connect Google */}
              <form action={async () => { "use server"; await signIn("google") }}>
                <button type="submit" className="w-full flex items-center justify-center gap-3 border py-3 rounded-lg hover:bg-gray-50 transition">
                  <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /><path fill="none" d="M1 1h22v22H1z" /></svg>
                  Connect Gmail
                </button>
              </form>

              {/* Connect Outlook */}
              <form action={async () => { "use server"; await signIn("microsoft-entra-id") }}>
                <button type="submit" className="w-full flex items-center justify-center gap-3 border py-3 rounded-lg hover:bg-gray-50 transition">
                  <svg className="w-5 h-5" viewBox="0 0 23 23"><path fill="#f3f2f1" d="M0 0h23v23H0z" /><path fill="#f35325" d="M1 1h10v10H1z" /><path fill="#81bc06" d="M12 1h10v10H12z" /><path fill="#05a6f0" d="M1 12h10v10H1z" /><path fill="#ffba08" d="M12 12h10v10H12z" /></svg>
                  Connect Outlook
                </button>
              </form>

              {/* Connect Slack */}
              <form action={async () => { "use server"; await signIn("slack") }}>
                <button type="submit" className="w-full flex items-center justify-center gap-3 border py-3 rounded-lg hover:bg-gray-50 transition">
                  <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52z" /><path fill="#E01E5A" d="M6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" /><path fill="#36C5F0" d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834z" /><path fill="#36C5F0" d="M8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" /><path fill="#2EB67D" d="M18.956 8.835a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.835a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.835z" /><path fill="#2EB67D" d="M17.688 8.835a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.313z" /><path fill="#ECB22E" d="M15.165 18.958a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.523-2.52h-2.522v-2.522z" /><path fill="#ECB22E" d="M15.165 17.687a2.527 2.527 0 0 1-2.523-2.52 2.528 2.528 0 0 1 2.523-2.522h6.312A2.528 2.528 0 0 1 24 15.166a2.528 2.528 0 0 1-2.522 2.52H15.165z" /></svg>
                  Connect Slack
                </button>
              </form>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <a href="/dashboard" className="w-full block text-center bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition">
                Return to Dashboard &amp; Logs &rarr;
              </a>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <h2 className="text-xl font-bold mb-6">Welcome to Email Agent</h2>
            <form
              action={async () => {
                "use server"
                await signIn("google")
              }}
            >
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition">
                Sign in with Google to Start
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  )
}
