import { Hero } from '@/sections/Hero';
import { HomeNavigation } from '../components/HomeNavigation';
import { Database, Code2, Server, Cloud, Monitor, GitBranch, ArrowRight, ExternalLink } from 'lucide-react';
import { Skills } from '@/sections/Skills';
import { Projects } from '@/sections/Projects';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    // Main container with dark background
    <div className="min-h-screen bg-[#0a0a0f] text-gray-300 font-sans selection:bg-cyan-500/30">

      {/* Navigation */}
      <HomeNavigation />

      <main className="max-w-7xl mx-auto px-8">

        {/* Hero Section */}
        <Hero />

        {/* Core Infrastructure (Skills) */}
        <Skills />

        {/* Terminal Deployments (Projects) */}
        <Projects />

        {/* Call to Action */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}