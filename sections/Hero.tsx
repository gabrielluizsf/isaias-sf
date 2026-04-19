import { ArrowRight } from 'lucide-react';
import React from 'react';

export function Hero(): React.JSX.Element {
    return (
        <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <div className="flex items-center space-x-2 text-cyan-400 text-xs font-mono tracking-widest uppercase">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                    <span>// Initializing: Isaias Soares Feitoza</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
                    Isaias Soares <br />
                    <span className="text-cyan-400">Feitoza</span>
                </h1>

                <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                    Web Developer and Designer specializing in high-performance architectures and immersive interfaces. Crafting scalable solutions that bridge the gap between creative vision and technical execution.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                    <a href='mailto:isaiassoares0204@gmail.com ?subject=Project%20Inquiry&body=Hello%20Isaias%2C%0A%0AI%20am%20interested%20in%20discussing%20a%20potential%20project%20with%20you.%20Please%20let%20me%20know%20your%20availability.%0A%0ABest%20regards%2C' target="_blank">
                    <button className="px-8 py-4 bg-cyan-400 text-gray-950 font-bold uppercase tracking-widest flex items-center space-x-2 hover:bg-cyan-300 transition-colors">
                        <span>Initiate Project</span>
                        <ArrowRight size={18} />
                    </button>
                    </a>
                </div>
            </div>

            {/* Profile Image - Rounded as requested */}
            <div className="flex justify-center lg:justify-end">
                <div className="relative group">
                    {/* Decorative background glow */}
                    <div className="absolute -inset-1 bg-cyan-400/20 rounded-full blur-2xl group-hover:bg-cyan-400/30 transition duration-500"></div>

                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-cyan-400/50 overflow-hidden bg-gray-900 p-2 shadow-[0_0_40px_rgba(34,211,238,0.1)]">
                        <img
                            src="https://github.com/isaias-sf.png"
                            alt="Isaias Soares Feitoza"
                            className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>

                    {/* Decorative tech corners */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/50 -translate-x-4 -translate-y-4"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400/50 translate-x-4 translate-y-4"></div>
                </div>
            </div>
        </section>
    )
}