

export default function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-indigo-950 to-purple-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-fuchsia-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 inline-block">
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-6 mx-auto animate-pulse"></div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Onde o Corte é Arte<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 animate-pulse">e o Estilo é Tradição</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Aqui o corte é sério, mas a conversa é leve.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/5511945372645"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-12 py-4 rounded-full text-sm font-bold tracking-widest transition-all duration-300 hover:scale-110 inline-block hover:shadow-2xl hover:shadow-purple-500/50 relative overflow-hidden group"
          >
            <span className="relative z-10">ENTRAR EM CONTATO</span>
            <span className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
          <button
            onClick={scrollToServices}
            className="border-2 border-purple-500/50 hover:border-purple-400 text-white px-12 py-4 rounded-full text-sm font-bold tracking-widest transition-all duration-300 hover:bg-purple-500/20 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
          >
            NOSSOS SERVIÇOS
          </button>
        </div>

        
      </div>
    </section>
  );
}
