import { MapPin, Clock, Phone, Instagram,  } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Agende Sua Visita
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Estamos prontos para cuidar do seu visual. Entre em contato e garanta seu horário.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center flex-shrink-0 rounded-2xl shadow-lg shadow-purple-500/50 hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">Endereço</h3>
                <p className="text-gray-600 leading-relaxed">
                  Av. Capitão Francisco César, 1089<br />
                  Vila Engenho Novo, Barueri- SP<br />
                  06415-000
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center flex-shrink-0 rounded-2xl shadow-lg shadow-purple-500/50 hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">Horário de Funcionamento</h3>
                <p className="text-gray-600 leading-relaxed">
                  Segunda a Sexta: 09h às 20h<br />
                  Sábado: 09h às 18h<br />
                  Domingo: Fechado
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center flex-shrink-0 rounded-2xl shadow-lg shadow-purple-500/50 hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">Contato</h3>
                <p className="text-gray-600 leading-relaxed">
                  WhatsApp: (11) 945372645<br />
                  Email: samuelgamabarueri@gmail.com
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <h3 className="font-bold text-black mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/samu_elcabeleireiro/?utm_source=ig_web_button_share_sheet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 hover:from-fuchsia-600 hover:to-purple-600 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
            
              </div>
            </div>

            <a
              href="https://wa.me/5511945372645"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-fuchsia-600 hover:to-purple-600 text-white px-12 py-5 rounded-full text-sm font-bold tracking-widest transition-all duration-500 hover:scale-105 w-full text-center shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50 relative overflow-hidden group"
            >
              <span className="relative z-10">ENTRAR EM CONTATO</span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </a>
          </div>

        {/* --- Google Maps --- */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-lg border border-gray-300 dark:border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.2033641688417!2d-46.8925385883017!3d-23.489183458857827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0342f56bbfdf%3A0xdf5e23969e329a07!2sSamuel%20Cabeilereiro!5e0!3m2!1spt-BR!2sbr!4v1761679451561!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

