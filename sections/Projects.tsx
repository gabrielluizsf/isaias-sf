import { ExternalLink } from 'lucide-react';
import React from 'react';

export function Projects(): React.JSX.Element {
    return (
        <section id="projects" className="py-24">
          <h2 className="text-2xl font-bold text-white mb-12 text-center uppercase tracking-widest">Terminal Deployments</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0f111a] border border-white/5 p-6 hover:border-cyan-400/30 transition-all flex flex-col">
              <div className="h-48 bg-gradient-to-br from-purple-900/20 to-gray-950 mb-6 flex items-center justify-center border border-purple-400/20">
                <span className="text-purple-500/50 font-mono text-xs">IMG_MODULE_03</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Rocha Cell Website</h3>
              <p className="text-gray-500 text-sm mb-6 flex-grow">
                Diagnósticos avançados, componentes originais e serviços de desbloqueio nível master. Tratamos cada dispositivo como um instrumento de alta precisão.
              </p>
              <div className="flex gap-2 mb-6">
                <span className="text-[10px] uppercase tracking-widest bg-gray-900 px-2 py-1 border border-white/10">Next.js</span>
                <span className="text-[10px] uppercase tracking-widest bg-gray-900 px-2 py-1 border border-white/10">Vercel</span>
              </div>
              <a href="https://rochacell.vercel.app/" target='_blank' className="text-cyan-400 text-xs font-bold uppercase tracking-widest flex items-center space-x-2 hover:text-cyan-300">
                <span>View</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </section>
    )
}