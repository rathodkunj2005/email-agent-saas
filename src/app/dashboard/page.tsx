import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function Dashboard() {
    const session = await auth()

    if (!session) {
        redirect("/")
    }

    return (
        <div className="min-h-screen p-8 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <header className="flex justify-between items-center mb-8 border-b pb-4">
                    <div>
                        <h1 className="text-2xl font-bold font-mono text-gray-900">Agent Dashboard</h1>
                        <p className="text-gray-500 text-sm mt-1">Configure your email agent and view logs.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-600 bg-gray-200 px-3 py-1 rounded-full font-mono">{session.user?.email}</span>
                        <a href="/" className="text-sm font-medium text-blue-600 hover:text-blue-800">Log Out / Integrations</a>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Settings Panel */}
                    <div className="md:col-span-1 space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                Agent Settings
                            </h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Target Slack Channel</label>
                                    <input type="text" defaultValue="#general" className="w-full text-sm font-mono border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Agent Personality / Instructions</label>
                                    <textarea rows={4} defaultValue="Professional, concise, and friendly. Never agree to meetings without checking first." className="w-full text-sm font-mono border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
                                </div>

                                <div className="flex items-center justify-between pt-2">
                                    <span className="text-sm font-medium text-gray-700">Agent Active</span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" defaultChecked className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                                    </label>
                                </div>

                                <button className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition">Save Settings</button>
                            </div>
                        </div>

                        {/* Integration Status Demo */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-sm text-gray-800 uppercase tracking-wider mb-3">Integrations Status</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-sm text-green-700 bg-green-50 p-2 rounded"><span className="w-2 h-2 rounded-full bg-green-500"></span> Google Mail Connected</li>
                                <li className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 p-2 rounded"><span className="w-2 h-2 rounded-full bg-gray-300"></span> Outlook (Not Configured)</li>
                                <li className="flex items-center gap-2 text-sm text-green-700 bg-green-50 p-2 rounded"><span className="w-2 h-2 rounded-full bg-green-500"></span> Slack Bot Authorized</li>
                            </ul>
                        </div>
                    </div>

                    {/* Logs Panel */}
                    <div className="md:col-span-2">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 min-h-[500px]">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="font-bold text-lg flex items-center gap-2">
                                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                    Activity Logs
                                </h2>
                                <button className="text-xs text-gray-500 px-3 py-1 border rounded hover:bg-gray-50">Refresh</button>
                            </div>

                            <div className="space-y-4">
                                {/* Mock Data for visual structure */}
                                <div className="border border-gray-100 rounded-lg p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded uppercase tracking-wider mb-2">Pending Approval</span>
                                            <p className="font-medium text-gray-900">Meeting inquiry from Jane Doe</p>
                                        </div>
                                        <span className="text-xs text-gray-500 font-mono">2 mins ago</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">Hi, I wanted to check if you are available for a sync on Thursday to discuss the new project requirements...</p>
                                    <div className="bg-gray-50 p-3 rounded border text-sm font-mono text-gray-700">
                                        <span className="text-blue-600 font-bold block mb-1">Agent Draft:</span>
                                        Hi Jane, thanks for reaching out. Yes, Thursday works for me. Please send over a calendar invite with the meeting link.
                                    </div>
                                </div>

                                <div className="border border-gray-100 rounded-lg p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded uppercase tracking-wider mb-2">Sent</span>
                                            <p className="font-medium text-gray-900">Invoice #4029 received</p>
                                        </div>
                                        <span className="text-xs text-gray-500 font-mono">1 hour ago</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3 line-clamp-1">Attached is the invoice for last month's services...</p>
                                </div>

                                <div className="border border-gray-100 rounded-lg p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded uppercase tracking-wider mb-2">Discarded (LLM skipped)</span>
                                            <p className="font-medium text-gray-900">GitHub Security Alert</p>
                                        </div>
                                        <span className="text-xs text-gray-500 font-mono">3 hours ago</span>
                                    </div>
                                    <p className="text-sm text-gray-600 line-clamp-1">We discovered a potential security vulnerability in your repository...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
