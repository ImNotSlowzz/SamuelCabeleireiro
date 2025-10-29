import { Award, Users, Clock } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-purple-950 via-indigo-950 to-purple-900 text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Texto principal */}
          <div>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 mb-6 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              A História por Trás<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400">
                da Navalha
              </span>
            </h2>

            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Desde cedo, Samuel já sabia o caminho que queria seguir. Inspirado pelo pai, que também era cabeleireiro, começou a cortar cabelo ainda jovem na Bahia — por paixão, e não por dinheiro. Usava o que tinha à mão, oferecendo cortes gratuitos aos amigos apenas para aprender, crescer e sentir a alegria de transformar o visual de alguém.
                O <span className="text-purple-300 font-semibold">Samuel </span>Aos 22 anos, decidiu dar um passo de fé: deixou sua terra natal e veio para São Paulo, chamado pelo irmão que já trabalhava na área. Dividiu aluguel, trabalhou em telemarketing para pagar cursos e, aos poucos, foi se tornando um profissional completo. Passou por salões femininos, vendeu produtos, e aprendeu que o verdadeiro sucesso vem da persistência. </p>

              <p>
                Quando abriu o próprio salão, começou do zero — sem clientes, sem estrutura, apenas com coragem, um puff e uma cadeira comprados com a ajuda do irmão. Nos primeiros dias, ficava de pé na porta esperando alguém entrar. Às vezes fazia dois cortes por dia, mas nunca perdeu a fé.

Samuel sempre acreditou que seu talento era um dom de Deus, e que cada cliente era uma oportunidade de tocar vidas. Para ele, cortar cabelo é mais do que estética — é escutar, entender e cuidar. Ele costuma dizer que o barbeiro também é um pouco psicólogo: precisa ter empatia, porque nunca se sabe o que o outro está enfrentando.

Com o tempo, a dedicação deu frutos. Um cliente indicava outro, e o salão começou a encher. Hoje, mais de 15 anos depois, Samuel transforma não apenas cabelos, mas histórias. Em dias bons, corta até 16 cabelos, sempre com o mesmo sorriso e a mesma paixão de quando começou.

Atualmente, seu salão é símbolo de superação, fé e amor pelo que faz. Samuel não apenas corta, ele inspira. Cada visita é uma experiência, cada conversa é uma troca, e cada corte é um lembrete de que a coragem e a fé realmente mudam destinos.
              </p>

              <p className="text-purple-300 font-semibold italic text-lg border-l-4 border-purple-500 pl-4 bg-purple-900/30 py-3 rounded-r-lg">
                “Não é apenas sobre cortar cabelo. É sobre coragem, fé e transformar histórias.”
              </p>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 mx-auto mb-3 flex items-center justify-center rounded-xl hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/50">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-purple-400 mb-1">10+</div>
                <div className="text-xs text-gray-500 tracking-wider">ANOS</div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 mx-auto mb-3 flex items-center justify-center rounded-xl hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/50">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-purple-400 mb-1">1K+</div>
                <div className="text-xs text-gray-500 tracking-wider">CLIENTES</div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 mx-auto mb-3 flex items-center justify-center rounded-xl hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/50">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-purple-400 mb-1">100%</div>
                <div className="text-xs text-gray-500 tracking-wider">DEDICAÇÃO</div>
              </div>
            </div>
          </div>

          {/* Foto do barbeiro */}
          <div className="relative">
            <div className="aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden rounded-3xl shadow-2xl group">
              <img
                src="/photos/samu.jpg" // 👉 coloque a foto aqui
                alt="Samuel Cabelereiro"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />

              {/* Efeitos de brilho */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/20 blur-3xl animate-pulse"></div>
              <div
                className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-600/20 blur-3xl animate-pulse"
                style={{ animationDelay: '1s' }}
              ></div>
            </div>

            {/* Molduras decorativas */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border-2 border-purple-500/30 rounded-3xl -z-10"></div>
            <div className="absolute -top-8 -left-8 w-48 h-48 border-2 border-purple-500/30 rounded-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
