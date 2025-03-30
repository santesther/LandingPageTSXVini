import Image from "next/image"
import Link from "next/link"
import SmoothScroll from "../app/components/smooth-scroll"
import FAQAccordion from "../app/components/faq-accordion"
import ContactForm from "./components/contact-form"


export default function Home() {
  const faqItems = [
    {
      question: "Como funciona uma análise?",
      answer:
        "O processo psicanalítico começa com algumas entrevistas iniciais, conhecidas como entrevistas preliminares. Nesse momento, o analista escuta as demandas do paciente, busca compreender suas questões e avalia se o processo terapêutico é possível. Se ambos decidirem dar continuidade, inicia-se a análise propriamente dita. A psicanálise acontece por meio da fala do analisando, com a escuta atenta do analista, que intervém para ajudar na construção de novos sentidos",
    },
    {
      question: "O atendimento é online ou presencial?",
      answer:
        "Atendo tanto online quanto presencialmente. O atendimento online permite maior flexibilidade e acessibilidade, enquanto o presencial pode ser mais indicado para algumas pessoas, dependendo de suas necessidades e preferências. A escolha do formato pode ser discutida no primeiro contato.",
    },
    {
      question: "Quanto tempo dura uma sessão?",
      answer:
        "Geralmente, uma sessão dura em torno de 50 minutos, mas isso é algo bastante dinâmico. Dependendo do momento da análise, as sessões podem ser alongadas ou até mesmo encurtadas. Esse tempo não é fixo, pois o próprio manejo da duração da sessão pode ser utilizado como uma ferramenta importante no processo analítico.",
    },
    {
      question: "Com que frequência devo fazer terapia?",
      answer:
        "A frequência ideal varia para cada pessoa, mas, em geral, as sessões acontecem uma vez por semana. Em alguns casos, o analista pode indicar sessões mais frequentes, dependendo da necessidade do analisando.",
    },
    {
      question: "Quanto tempo dura um processo terapêutico?",
      answer:
        "Não há um tempo fixo, pois cada pessoa tem seu próprio ritmo de desenvolvimento e transformação. Algumas questões podem ser trabalhadas em curto prazo, enquanto outras demandam acompanhamento por mais tempo.",
    },
    {
      question: "Atende convênios ou apenas particular?",
      answer:
        "Atualmente, o atendimento é realizado de forma particular. No entanto, alguns convênios oferecem reembolso para sessões psicológicas. Consulte seu plano de saúde para verificar essa possibilidade.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <SmoothScroll />
      <header className="py-6 border-b border-gray-200 fixed w-full bg-white z-50">
      <div className="w-full px-4 md:px-6 flex justify-between items-center">
          <div className="logo">
            <Link href="#home" aria-label="Ir para o topo da página">
              <Image
                src="/images/Logo_nome.svg"
                alt="Logo de Vinícius Gomes - Psicólogo"
                width={400}
                height={50}
                priority
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#sobre" className="text-gray-900 hover:text-gray-900" style={{ fontSize: '19px' }} aria-label="Saiba mais sobre mim">
              Sobre o Psicólogo
            </Link>
            <Link
              href="#terapia"
              className="text-gray-900 hover:text-gray-900" style={{ fontSize: '19px' }}
              aria-label="Informações sobre a terapia"
            >
              Psicoterapia psicanalítica
            </Link>
            <Link href="#consultorio" className="text-gray-900 hover:text-gray-900" style={{ fontSize: '19px' }} aria-label="Saiba mais sobre meu consultório">
              Meu Consultório
            </Link>
            <Link href="#consultas" className="text-gray-900 hover:text-gray-900" style={{ fontSize: '19px' }} aria-label="Detalhes sobre consultas">
              Consulta e valores
            </Link>
            <Link href="#duvidas" className="text-gray-900 hover:text-gray-900" style={{ fontSize: '19px' }} aria-label="Perguntas frequentes">
              Dúvidas frequentes
            </Link>
            <Link
              href="#contato"
              className="text-gray-900 hover:text-gray-900" style={{ fontSize: '19px' }}
              aria-label="Formas de entrar em contato"
            >
              Contato e agendamento
            </Link>
          </nav>
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-grow pt-24">
        <section id="home" className="hero py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="hero-text w-full md:w-1/2 order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-900 tracking-wide" >
                  O sofrimento tem sentido – escutá-lo é o primeiro passo
                </h2>
                <p className="text-gray-900 mb-6 text-justify tracking-wide" style={{ fontSize: '22px' }}>
                  Há momentos em que a estrutura que nos sustenta começa a ruir, e é nesse ponto que a análise pode
                  fazer a diferença. Não se trata de simplesmente eliminar os sintomas, mas de escutá-los e compreender
                  o que eles revelam.
                </p>
                <p className="text-gray-900 mb-8 text-justify tracking-wide" style={{ fontSize: '22px' }}>
                  A psicanálise não promete uma vida sem dores, mas possibilita a construção de um caminho em que seja
                  possível estabelecer uma relação mais saudável consigo, com o outro e com a própria vida. Para isso, é
                  preciso um analista – e estou aqui para acompanhar você nesse processo de mudança.
                </p>
                <div id="first" className="buttonBox relative inline-block">
                <a href="https://linktr.ee/psiviniciusgomes?utm_source=linktree_profile_share&ltsid=63eaa951-9664-43fe-b37e-346f4e9278e3" target="_blank" rel="noopener noreferrer">
                  <button
                    type="button"
                    className="bg-gray-600 text-white px-6 py-3 relative z-1 hover:bg-gray-700 transition-colors"
                  >
                    Agende sua consulta
                  </button>
                  </a>
                  <div className="border absolute top-2 left-2 w-full h-full border border-gray-400"></div>
                  <div className="border absolute top-4 left-4 w-full h-full border border-gray-400"></div>
                </div>
              </div>
              <div className="hero-image w-full md:w-1/2 order-1 md:order-2">
                <div className="relative w-full h-[400px] md:h-[500px]">
                  <Image
                    src="/images/Vini-Home.jpg"
                    alt="Imagem ilustrativa sobre psicologia e terapia"
                    fill
                    className="object-cover"
                    sizes="(max-width: 750px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="section min-h-[90vh] flex items-center bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 py-24">
            <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
              <div className="w-full md:w-2/5">
                <div className="relative w-full h-[600px] md:h-[700px]">
                 <Image
                  src="/images/teste.jpg"
                  alt="Imagem ilustrativa sobre psicologia e terapia"
                  fill
                  className="object-cover"
                  sizes="/images/Vini-Home.jpg 750w, /images/Vini-Home@2x.jpg 1500w"
                />
                </div>
              </div>
              <div className="w-full md:w-3/5">
                <h2 className="text-3xl md:text-5xl font-serif mb-8 text-gray-900 text-center">Sobre mim</h2>
                <div className="space-y-6 text-gray-900 text-justify text-lg tracking-wide" style={{ fontSize: '22px' }}>
                  <p>
                    Meu nome é Vinícius Sant'Ana Gomes e sou psicólogo pelo Instituto Superior de Ensino do CENSA, em
                    Campos dos Goytacazes. Atuo com base na psicanálise e em sua ética, oferecendo atendimentos
                    presenciais e online.
                  </p>
                  <p>
                    A clínica psicanalítica, para mim, é mais do que um método terapêutico; é um modo de estar no mundo,
                    um estilo de vida que se transmite de inconsciente para inconsciente. É um caminho que me dá
                    liberdade, que não se encaixa em um modelo engessado de diagnóstico, rotulação ou separação dos
                    sintomas. Em vez disso, permite olhar para a história do sujeito, para aquilo que se desenrola
                    singularmente em cada análise.
                  </p>
                  <p>
                    Além disso, tenho experiência em serviços de saúde mental, como o CAPS, o que me permitiu
                    desenvolver um olhar atento às complexidades do sofrimento psíquico e às relações entre a clínica e
                    a sociedade.
                  </p>
                  <p>
                    Tenho especial interesse em acolher aqueles que enfrentam angústias decorrentes de conflitos
                    internos, padrões sociais e atravessamentos culturais. Busco proporcionar um espaço seguro, onde
                    cada um possa expressar suas inquietações e encontrar novos sentidos para sua trajetória.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="terapia" className="section min-h-[90vh] flex items-center">
          <div className="container mx-auto px-4 md:px-6 py-24">
            <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
              <div className="w-full md:w-3/5 order-2 md:order-1">
                <h2 className="text-3xl md:text-5xl font-serif mb-8 text-gray-800 text-center">
                  A clínica psicanalítica
                </h2>
                <div className="space-y-6 text-gray-900 text-justify text-lg tracking-wide" style={{ fontSize: '22px' }}>
                  <p>
                    A clínica psicanalítica é um espaço voltado para o aprofundamento da subjetividade, onde o indivíduo
                    tem a oportunidade de explorar seus conflitos internos, angústias e questões não resolvidas. A
                    partir de uma escuta atenta e neutra, busca-se compreender as dinâmicas inconscientes que moldam
                    pensamentos, emoções e comportamentos, com o objetivo de promover uma transformação significativa.
                  </p>
                  <p>
                    Na psicanálise, o paciente é incentivado a utilizar a livre associação de ideias, permitindo que
                    seus pensamentos se conectem livremente, sem censura, o que favorece o surgimento de reflexões e
                    insights. Em vez de oferecer conselhos, o trabalho se concentra em estimular uma análise verdadeira,
                    com um olhar voltado para dentro, para que o sujeito possa se confrontar com suas próprias questões.
                    Esse processo é essencial para que o paciente modifique gradualmente sua relação com seus desejos,
                    traumas e tensões internas, alcançando maior autonomia e capacidade de lidar com suas escolhas e
                    desafios.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-2/5 order-1 md:order-2">
                <div className="relative w-full h-[500px] md:h-[600px]">
                  <Image
                    src="/images/clinica-psica.jpg"
                    alt="Clínica psicanalítica"
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="consultorio" className="section min-h-[90vh] bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 py-24">
            <div className="mb-24">
              <div className="flex items-center justify-center mb-12">
                <h2 className="text-3xl md:text-5xl font-serif text-gray-800 mr-6">Meu Consultório</h2>
                <div className="w-32 h-32 rounded-full bg-[#c4bcab]"></div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-2/5">
                  <div className="relative w-full h-[400px]">
                    <Image
                      src="/images/consultorio1.jpg"
                      alt="Consultório - Vista 1"
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                  <div className="mt-4 text-right">
                    <div className="flex justify-end items-center space-x-2">
                      <span className="text-2xl font-bold text-[#d49b72]">01</span>
                      <p className="text-xl text-gray-800">Acolhedor</p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-3/5">
                  <div className="relative w-full h-[400px]">
                    <Image
                      src="/images/consultorio2.jpg"
                      alt="Consultório - Vista 2"
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 60vw"
                    />
                  </div>
                  <div className="mt-4 text-right">
                    <div className="flex justify-end items-center space-x-2">
                      <span className="text-2xl font-bold text-[#d49b72]">02</span>
                      <p className="text-xl text-gray-800">Confortável</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-24">
              <div className="flex justify-center relative">
                <div className="w-full max-w-4xl relative pl-32 md:pl-36">
                  <div className="absolute left-[-50px] top-1/2 -translate-y-1/2 z-10">
                  <div className="w-40 h-40 rounded-full bg-[#c4bcab]"></div>
                  </div>

                  <div className="relative w-full h-[450px] md:h-[550px]">
                    <Image
                      src="/images/consultorio3.jpg"
                      alt="Consultório - Vista panorâmica"
                      fill
                      className="object-cover object-center rounded-lg"
                      sizes="(max-width: 768px) 100vw, 800px"
                      quality={100}
                      priority
                    />
                  </div>
                  <div className="mt-4 text-right">
                    <div className="flex justify-end items-center space-x-2">
                      <span className="text-2xl font-bold text-[#d49b72]">03</span>
                      <p className="text-xl text-gray-800">Seguro</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="consultas" className="section min-h-[90vh] flex items-center bg-white-50">
          <div className="container mx-auto px-4 md:px-6 py-24">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-serif mb-10 text-gray-900">Consultas e Valores</h2>
              <div className="space-y-6 text-gray-900 text-center text-lg tracking-wide" style={{ fontSize: '22px' }}>
                <p>
                  O valor das consultas não se baseia em uma relação de troca comercial ou venda de um produto. A
                  consulta psicanalítica não é um serviço a ser adquirido, mas um processo que exige uma disposição
                  genuína do sujeito. O custo de cada sessão está intimamente ligado à realidade financeira de cada
                  paciente, respeitando suas condições, mas também simboliza um comprometimento com o próprio processo
                  de análise.
                </p>
                <p>
                  O valor investido na terapia, de certa forma, reflete o quanto o paciente está disposto a se dedicar
                  ao seu processo de cuidado e autoconhecimento. Assim como a análise exige um envolvimento genuíno, o
                  valor da consulta simboliza a disposição do sujeito em se comprometer com sua saúde emocional e
                  psíquica, reconhecendo a importância desse processo para o seu bem-estar e desenvolvimento pessoal.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="duvidas" className="section min-h-[90vh] flex items-center bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 py-24">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-serif mb-10 text-gray-900 text-center">Dúvidas Frequentes</h2>
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>

        <section id="contato" className="section min-h-[90vh] flex items-center bg-white">
          <div className="container mx-auto px-4 md:px-6 py-24">
            <div className="flex flex-col md:flex-row gap-12 md:gap-16">
              <div className="w-full md:w-3/5">
                <h2 className="text-3xl md:text-5xl font-serif mb-6 text-gray-900">
                  Entre em contato e agende sua consulta
                </h2>
                <p className="text-gray-900 mb-8 text-justify tracking-wide" style={{ fontSize: '18px' }}>
                  Preencha o formulário abaixo para tirar dúvidas ou marcar sua primeira sessão. Estou aqui para ajudar
                  você a iniciar uma jornada de autoconhecimento e bem-estar. Se preferir, entre em contato diretamente
                  pelo WhatsApp ou e-mail.
                </p>
                <ContactForm />
              </div>
              <div className="w-full md:w-2/5">
                {/* Ajustado para alinhar com o início do formulário */}
                <div className="pt-[181px] space-y-10">
                  {" "}
                  {/* Adicionado padding-top para alinhar com o primeiro campo do formulário */}
                  <div>
                    <h3 className="text-xl font-serif mb-4 text-gray-900 uppercase">WhatsApp</h3>
                    <p className="text-2xl font-medium">(22) 998742955</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-4 text-gray-900 uppercase">E-mail</h3>
                    <p className="text-2xl font-medium">psi.viniciusgomes@outlook.com</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-4 text-gray-900 uppercase">CRP</h3>
                    <p className="text-2xl font-medium">05/79562</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main> 
    </div>
  )
}
