import { Scissors } from 'lucide-react';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-950 backdrop-blur-sm z-50 border-b border-purple-500/30 shadow-lg shadow-purple-500/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Scissors className="w-8 h-8 text-purple-400 animate-pulse" />
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Samuel Cabelereiro</h1>
              <p className="text-xs text-purple-400 tracking-widest">BARBEARIA</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-purple-400 transition-all duration-300 text-sm tracking-wide hover:scale-110 relative group">
              INÍCIO
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-purple-400 transition-all duration-300 text-sm tracking-wide hover:scale-110 relative group">
              SERVIÇOS
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-purple-400 transition-all duration-300 text-sm tracking-wide hover:scale-110 relative group">
              HISTÓRIA
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-300 hover:text-purple-400 transition-all duration-300 text-sm tracking-wide hover:scale-110 relative group">
              GALERIA
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-purple-400 transition-all duration-300 text-sm tracking-wide hover:scale-110 relative group">
              CONTATO
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>

          <a
            href="https://wa.me/5511945372645"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 relative overflow-hidden group"
          >
            <span className="relative z-10">CONTATO</span>
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        </div>
      </nav>
    </header>
  );
}
