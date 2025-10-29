import { Scissors } from 'lucide-react';

const galleryItems = [
  { client: 'Cliente 1', image: '/SamuelCabeleireiro/photos/cliente1.jpg' },
  { client: 'Cliente 2', image: '/SamuelCabeleireiro/photos/cliente2.jpg' },
  { client: 'Cliente 3', image: '/SamuelCabeleireiro/photos/cliente3.jpg' },
  { client: 'Cliente 4', image: '/SamuelCabeleireiro/photos/cliente4.jpg' },
  { client: 'Cliente 5', image: '/SamuelCabeleireiro/photos/cliente5.jpg' },
  { client: 'Cliente 6', image: '/SamuelCabeleireiro/photos/cliente6.jpg' },
];


export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Galeria de Estilos
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Alguns dos nossos trabalhos mais recentes. Cada corte conta uma história única.
          </p>
        </div>

        {/* Grid de imagens */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square bg-gray-200 overflow-hidden cursor-pointer rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40"
            >
              {/* Imagem de fundo */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-75"
              />

              {/* Overlay de hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-indigo-900/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-purple-300 text-sm tracking-wider">{item.client}</p>
                </div>
              </div>

              {/* Ícones decorativos */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <Scissors className="w-16 h-16 text-purple-400/30 group-hover:text-purple-300/50 transition-transform duration-500 group-hover:rotate-12" />
              </div>

              <div className="absolute top-4 right-4 w-12 h-12 border-2 border-purple-500/70 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-purple-500/70 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-rotate-12"></div>
            </div>
          ))}
        </div>

        {/* Rodapé da seção */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm">
            Siga-nos no Instagram para ver mais do nosso trabalho
          </p>
        </div>
      </div>
    </section>
  );
}
