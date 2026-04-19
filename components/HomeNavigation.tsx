import React from 'react';

export function HomeNavigation(): React.JSX.Element {
    return (
        <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto border-b border-white/5">
        <div className="text-xl font-bold tracking-tighter">
          <span className="text-cyan-400">ISAIAS</span>.DEV
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-widest uppercase">
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>
      </nav>
    )
}