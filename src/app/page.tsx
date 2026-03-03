import { auth, signIn, signOut } from "@/auth"
import { redirect } from "next/navigation"

export default async function Home() {
  const session = await auth()

  if (session) {
    redirect("/dashboard")
  }

  return (
    <main className="min-h-screen relative flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full bg-slate-950 z-0">
        <div className="absolute top-0 -left-1/4 w-[150%] h-[150%] rounded-[100%] bg-gradient-to-tr from-blue-900/30 via-indigo-900/20 to-purple-900/40 blur-[120px] mix-blend-screen pointer-events-none transform -translate-y-1/2"></div>
        <div className="absolute bottom-0 -right-1/4 w-[120%] h-[120%] rounded-[100%] bg-gradient-to-bl from-teal-900/20 via-blue-900/10 to-transparent blur-[120px] mix-blend-screen pointer-events-none transform translate-y-1/2"></div>
      </div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/djp7xhbbv/image/upload/v1709403328/grid_gbztw7.svg')] bg-center opacity-20 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-md px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="backdrop-blur-xl bg-slate-900/60 p-10 rounded-3xl border border-slate-700/50 shadow-2xl relative overflow-hidden">
          {/* Top glass reflection */}
          <div className="absolute -top-[100px] -right-[100px] w-[200px] h-[200px] bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="text-center mb-10 relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 mb-6 shadow-lg shadow-indigo-500/30">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5M10 12l2.25 1.5M14 12l-2.25 1.5" />
              </svg>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white mb-3 font-sans">
              Email <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Agent</span>
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
              Your autonomous AI assistant that intelligently drafts replies and seeks your Slack approval.
            </p>
          </div>

          <form
            action={async () => {
              "use server"
              await signIn("google")
            }}
            className="relative z-10"
          >
            <button type="submit" className="group w-full flex items-center justify-center gap-4 bg-white hover:bg-slate-50 text-slate-900 font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] border border-white/20">
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /><path fill="none" d="M1 1h22v22H1z" /></svg>
              <span>Continue with Google</span>
              <svg className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-700/50 text-center relative z-10">
            <p className="text-xs text-slate-500 font-medium tracking-wide">SECURE & PRIVATE BY DEFAULT</p>
          </div>
        </div>
      </div>
    </main>
  )
}
