import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Arsenal } from '@/components/sections/Arsenal';
import { TerminalFooter } from '@/components/sections/TerminalFooter';
import { NeuralEnvironment } from '@/components/background/NeuralEnvironment';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <NeuralEnvironment />
      <Hero />
      <Projects />
      <Arsenal />
      <TerminalFooter />
    </main>
  );
}
