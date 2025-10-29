import { Scissors, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-950 via-indigo-950 to-purple-900 text-white py-12 border-t border-purple-500/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <div className="flex items-center gap-3">
            <Scissors className="w-8 h-8 text-purple-400 animate-pulse" />
            <div>
              <h3 className="text-xl font-bold tracking-tight">Samuel Cabelereiro</h3>
              <p className="text-xs text-purple-400 tracking-widest">BARBEARIA</p>
            </div>
          </div>

          <p className="text-gray-400 text-sm max-w-md">
            Aqui o corte é sério, mas a conversa é leve.
          </p>

         <div className="flex items-center gap-2 text-sm text-gray-500">
  <span>Feito com</span>
  <Heart className="w-4 h-4 text-red-800 fill-red-800 animate-pulse" />
  <span>
    Por{" "}
    <a
      href="https://imnotslowzz.github.io/SiteImNotSStudios/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-500 hover:underline hover:text-purple-600 transition-colors"
    >
      ImNot'S Studios
    </a>
  </span>
</div>

<div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

<p className="text-gray-600 text-xs">
  © 2025{" "}
  <a
    href="https://imnotslowzz.github.io/SiteImNotSStudios/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-purple-500 hover:underline hover:text-purple-600 transition-colors"
  >
    ImNot'S Studios
  </a>
  . Todos os direitos reservados.
</p>
        </div>
      </div>
    </footer>
  );
}
