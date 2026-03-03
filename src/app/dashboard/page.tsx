import { auth, signIn, signOut } from "@/auth"
import { redirect } from "next/navigation"

export default async function Dashboard() {
    const session = await auth()

    if (!session) {
        redirect("/")
    }

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
            {/* Top Navbar */}
            <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-slate-200/50 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md shadow-indigo-500/20">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5M10 12l2.25 1.5M14 12l-2.25 1.5" />
                        </svg>
                    </div>
                    <h1 className="text-xl font-bold tracking-tight">Agent<span className="text-indigo-600">Space</span></h1>
                </div>
                <div className="flex items-center gap-6">
                    <div className="hidden sm:flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-sm font-medium text-slate-500">Agent Active</span>
                    </div>

                    <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
                        <div className="text-right hidden md:block">
                            <p className="text-sm font-semibold text-slate-800">{session.user?.name || "User"}</p>
                            <p className="text-xs text-slate-500">{session.user?.email}</p>
                        </div>
                        <form action={async () => { "use server"; await signOut() }}>
                            <button type="submit" className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Left Column: Settings & Integrations */}
                <div className="lg:col-span-4 space-y-6">

                    {/* Agent Settings Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            <h2 className="text-lg font-bold">Bot Configuration</h2>
                        </div>

                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Target Slack Channel</label>
                                <input type="text" defaultValue="#general" className="w-full text-sm placeholder:text-slate-400 bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Agent Personality & Context</label>
                                <textarea rows={4} defaultValue="Professional, concise, and highly responsive. Never finalize external meetings without explicit verification." className="w-full text-sm placeholder:text-slate-400 bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"></textarea>
                            </div>

                            <div className="pt-2">
                                <button className="w-full bg-slate-900 text-white font-semibold py-2.5 px-4 rounded-xl hover:bg-slate-800 transition-all shadow-sm active:scale-[0.98]">
                                    Save Configuration
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Integrations Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                            </div>
                            <h2 className="text-lg font-bold">Integrations</h2>
                        </div>

                        <div className="space-y-3">
                            {/* Gmail */}
                            <div className="flex flex-col gap-2 p-3 rounded-xl border border-green-200 bg-green-50/50">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /><path fill="none" d="M1 1h22v22H1z" /></svg>
                                        <span className="text-sm font-semibold text-slate-800">Gmail</span>
                                    </div>
                                    <span className="text-xs font-bold text-green-700 bg-green-200/50 px-2 py-1 rounded-md">Connected</span>
                                </div>
                            </div>

                            {/* Slack */}
                            <div className="flex flex-col gap-2 p-3 rounded-xl border border-green-200 bg-green-50/50">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52z" /><path fill="#E01E5A" d="M6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" /><path fill="#36C5F0" d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834z" /><path fill="#36C5F0" d="M8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" /><path fill="#2EB67D" d="M18.956 8.835a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.835a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.835z" /><path fill="#2EB67D" d="M17.688 8.835a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.313z" /><path fill="#ECB22E" d="M15.165 18.958a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.523-2.52h-2.522v-2.522z" /><path fill="#ECB22E" d="M15.165 17.687a2.527 2.527 0 0 1-2.523-2.52 2.528 2.528 0 0 1 2.523-2.522h6.312A2.528 2.528 0 0 1 24 15.166a2.528 2.528 0 0 1-2.522 2.52H15.165z" /></svg>
                                        <span className="text-sm font-semibold text-slate-800">Slack App</span>
                                    </div>
                                    <span className="text-xs font-bold text-green-700 bg-green-200/50 px-2 py-1 rounded-md">Authorized</span>
                                </div>
                            </div>

                            {/* Outlook */}
                            <form action={async () => { "use server"; await signIn("microsoft-entra-id") }} className="block pt-2">
                                <button type="submit" className="w-full flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all group">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 23 23"><path fill="#f3f2f1" d="M0 0h23v23H0z" /><path fill="#f35325" d="M1 1h10v10H1z" /><path fill="#81bc06" d="M12 1h10v10H12z" /><path fill="#05a6f0" d="M1 12h10v10H1z" /><path fill="#ffba08" d="M12 12h10v10H12z" /></svg>
                                        <span className="text-sm font-semibold text-slate-800">Outlook Mail</span>
                                    </div>
                                    <span className="text-xs font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">Connect &rarr;</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Right Column: Activity Feed */}
                <div className="lg:col-span-8">
                    <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-200 min-h-[600px] flex flex-col">

                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                </div>
                                <h2 className="text-xl font-bold">Activity Feed</h2>
                            </div>
                            <button className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-800 bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                                Refresh
                            </button>
                        </div>

                        <div className="space-y-5 flex-1 overflow-y-auto pr-2 custom-scrollbar">

                            {/* Mock Card 1 */}
                            <div className="group relative p-5 rounded-xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-md transition-all duration-300">
                                <div className="absolute top-0 left-0 w-1 h-full bg-amber-400 rounded-l-xl"></div>
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center gap-3">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-md tracking-wide">
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                                            AWAITING REVIEW
                                        </span>
                                    </div>
                                    <span className="text-xs font-medium text-slate-400">Just now</span>
                                </div>
                                <h3 className="text-base font-bold text-slate-900 mb-1">Inbound: Partner Proposal - Acme Corp</h3>
                                <p className="text-sm text-slate-500 mb-4 line-clamp-2">Hi Kunj, I'm reaching out from Acme Corp. We noticed your AgentSpace rollout and want to discuss a potential API integration partnership...</p>

                                <div className="bg-slate-50 rounded-lg p-4 border border-slate-100 font-mono text-sm leading-relaxed text-slate-700 relative">
                                    <div className="absolute -top-3 left-4 bg-indigo-100 text-indigo-700 font-sans text-xs font-bold px-2 py-0.5 rounded border border-indigo-200 shadow-sm">AI DRAFT</div>
                                    <p className="mt-1">Hi there,<br />Thanks for reaching out! A partnership involving API integrations sounds very interesting. Could you share some preliminary documentation or a brief overview of the proposed integration surface?<br /><br />Looking forward to connecting.</p>
                                </div>
                            </div>

                            {/* Mock Card 2 */}
                            <div className="group relative p-5 rounded-xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-md transition-all duration-300">
                                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-400 rounded-l-xl"></div>
                                <div className="flex justify-between items-start mb-3">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-md tracking-wide">
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        APPROVED & SENT
                                    </span>
                                    <span className="text-xs font-medium text-slate-400">2 hours ago</span>
                                </div>
                                <h3 className="text-base font-bold text-slate-900 mb-1">Invoice Receipt: Subscription Active</h3>
                                <p className="text-sm text-slate-500 line-clamp-1 italic">"Please find the attached receipt for your monthly Vercel pro subscription..."</p>
                            </div>

                            {/* Mock Card 3 */}
                            <div className="group relative p-5 rounded-xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-md transition-all duration-300 opacity-75">
                                <div className="absolute top-0 left-0 w-1 h-full bg-slate-300 rounded-l-xl"></div>
                                <div className="flex justify-between items-start mb-3">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-md tracking-wide">
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        DISCARDED / IGNORED
                                    </span>
                                    <span className="text-xs font-medium text-slate-400">5 hours ago</span>
                                </div>
                                <h3 className="text-base font-bold text-slate-900 mb-1">Security Alert (Automated)</h3>
                                <p className="text-sm text-slate-500 line-clamp-1 italic">"A new login was detected on your AWS console from a new IP location..."</p>
                            </div>

                        </div>
                    </div>
                </div>

            </main>

            {/* Custom Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
        .animate-in { animation: animateIn 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
        @keyframes animateIn {
          from { opacity: 0; transform: translateY(20px); filter: blur(4px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 20px; }
      `}} />
        </div>
    )
}
