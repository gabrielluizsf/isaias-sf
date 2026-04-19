import React from 'react';
import { 
    SiReact, 
    SiTypescript, 
    SiNodedotjs, 
    SiCloudflare, 
    SiHeroku, 
    SiVercel, 
    SiGo, 
    SiDocker 
} from 'react-icons/si';

export function Skills(): React.JSX.Element {
    const skills = [
        { name: "React.js", icon: SiReact },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Cloudflare", icon: SiCloudflare },
        { name: "Heroku", icon: SiHeroku },
        { name: "Vercel", icon: SiVercel },
        { name: "Golang", icon: SiGo },
        { name: "Docker", icon: SiDocker }
    ];

    return (
        <section id="skills" className="py-24 border-t border-white/5">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Core Infrastructure</h2>
                    <p className="text-gray-500 text-sm">Systematic integration of modern frameworks and low-level optimization protocols.</p>
                </div>
                <div className="hidden md:block text-xs font-mono text-gray-600">
                    LOADED_TECHNOLOGIES: {skills.length.toString().padStart(2, '0')} // ACTIVE_STACK: MERN
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {skills.map((skill, index) => (
                    <div 
                        key={index} 
                        className="bg-gray-900/40 border border-white/5 p-6 flex flex-col items-center justify-center space-y-4 hover:border-cyan-400/30 hover:bg-gray-900/80 transition-all cursor-pointer group"
                    >
                        <skill.icon className="w-8 h-8 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                        <span className="text-xs font-bold tracking-widest uppercase text-gray-400 group-hover:text-white">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}