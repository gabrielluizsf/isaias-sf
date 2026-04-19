import React from 'react';

export function Contact(): React.JSX.Element {
    return (
        <section id="contact" className="py-24">
            <div className="bg-gradient-to-b from-gray-900 to-[#0a0a0f] border border-white/5 p-12 md:p-24 text-center rounded-sm">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Ready to architect your <br />
                    <span className="text-cyan-400">next dimension?</span>
                </h2>
                <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                    Currently accepting high-impact projects and engineering collaborations. Secure your slot in the deployment queue.
                </p>
                <div className="flex flex-wrap justify-center items-center gap-6">
                <a href="https://www.instagram.com/gateszdesing" target="_blank">
                    <button className="px-8 py-4 bg-cyan-400 text-gray-950 font-bold uppercase tracking-widest hover:bg-cyan-300 transition-colors">
                        Open Communication
                    </button>
                    </a>
                    <div className="text-xs font-mono text-gray-500 flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        SYSTEM_STATUS: GLOBAL_ACCEPT
                    </div>
                </div>
            </div>
        </section>
    )
}