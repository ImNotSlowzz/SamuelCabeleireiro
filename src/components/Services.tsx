import { Scissors, Sparkles, Eye, Wind } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    name: 'Barba',
    description: 'Barba aparada e modelada para um acabamento impecável',
    price: 'R$ 27'
  },
  {
    icon: Wind,
    name: 'Social',
    description: 'Corte social clássico com acabamento limpo e elegante',
    price: 'R$ 27'
  },
  {
    icon: Sparkles,
    name: 'Sombrancelha',
    description: 'Aparação e design de sobrancelha com produtos premium',
    price: 'R$ 10'
  },
  {
    icon: Scissors,
    name: 'Pézinho',
    description: 'Atenção aos detalhes',
    price: 'R$ 10'
  },
  {
    icon: Sparkles,
    name: 'Navalhado',
    description: 'Contorno preciso com navalha para um acabamento perfeito',
    price: 'R$ 35'
  },
  {
    icon: Eye,
    name: 'Degrade',
    description: 'Degradê estiloso e harmonioso para um visual marcante',
    price: 'R$ 30'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Serviços especializados com técnicas modernas e tradicional atenção aos detalhes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-purple-50 border-2 border-purple-200 p-8 rounded-3xl hover:border-purple-500 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-indigo-600 group-hover:from-fuchsia-500 group-hover:to-purple-500 transition-all duration-500 flex items-center justify-center rounded-2xl rotate-0 group-hover:rotate-12 group-hover:scale-110 shadow-lg shadow-purple-500/50">
                    <Icon className="w-7 h-7 text-white transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {service.name}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">{service.price}</span>
                  <span className="text-xs text-gray-500 tracking-wider">POR SERVIÇO</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://wa.me/5511945372645"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-fuchsia-600 hover:to-purple-600 text-white px-16 py-5 rounded-full text-sm font-bold tracking-widest transition-all duration-500 hover:scale-110 shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50 relative overflow-hidden group"
          >
            <span className="relative z-10">ENTRAR EM CONTATO</span>
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </a>
        </div>
      </div>
    </section>
  );
}
