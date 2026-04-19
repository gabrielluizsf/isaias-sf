import React from 'react';

export function Footer(): React.JSX.Element {
    const githubLink: string = "https://github.com/isaias-sf";
    return (
        <footer className="border-t border-white/5 py-8 mt-12">
            <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-gray-600">
                <div><span className="text-cyan-400">ISAIAS</span>.TERMINAL</div>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href={githubLink} target="_blank" className="hover:text-cyan-400 transition-colors">GITHUB</a>
                    <a href="#" className="hover:text-cyan-400 transition-colors">LINKEDIN</a>
                    <a href="#" className="hover:text-cyan-400 transition-colors">TWITTER</a>
                </div>
                <div className="mt-4 md:mt-0">© 2026 {githubLink}</div>
            </div>
        </footer>
    )
}