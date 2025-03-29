import Image from "next/image"
import Link from "next/link"
import SmoothScroll from "../app/components/smooth-scroll"
import FAQAccordion from "../app/components/faq-accordion"
import ContactForm from "./components/contact-form"


export default function Home() {
  // Array de perguntas e respostas para a seção de dúvidas
  const faqItems = [
    {
      question: "O que é psicanálise?",
      answer:
        "A psicanálise é uma abordagem terapêutica desenvolvida por Sigmund Freud que busca compreender os processos inconscientes que influenciam nossos pensamentos, sentimentos e comportamentos. Diferente de outras terapias, a psicanálise foca na exploração do inconsciente e na compreensão de como experiências passadas moldam nosso presente.",
    },
    {
      question: "Qual a diferença entre psicólogo, psicanalista e psiquiatra?",
      answer:
        "O psicólogo é um profissional formado em Psicologia que pode atuar com diversas abordagens terapêuticas. O psicanalista é um profissional (que pode ser psicólogo, médico ou de outra formação) com formação específica em psicanálise. Já o psiquiatra é um médico especializado em saúde mental, com foco no diagnóstico e tratamento medicamentoso de transtornos mentais.",
    },
    {
      question: "Quanto tempo dura uma sessão?",
      answer:
        "As sessões de psicanálise geralmente duram entre 45 e 50 minutos, seguindo o conceito de 'hora analítica'. Este tempo é cuidadosamente estabelecido para proporcionar um espaço adequado para o trabalho terapêutico, mantendo a consistência e o enquadre necessários ao processo.",
    },
    {
      question: "Com que frequência devo fazer terapia?",
      answer:
        "Na psicanálise, recomenda-se geralmente uma frequência de uma a duas sessões por semana. A regularidade é importante para o processo analítico, pois permite um trabalho contínuo e aprofundado. No entanto, a frequência pode ser ajustada de acordo com as necessidades específicas de cada pessoa e o momento do processo terapêutico.",
    },
    {
      question: "Quanto tempo dura o tratamento?",
      answer:
        "Não há um tempo predeterminado para o processo psicanalítico. A duração varia de acordo com a singularidade de cada pessoa, a natureza das questões trabalhadas e os objetivos do tratamento. Alguns benefícios podem ser percebidos em poucas semanas, enquanto um trabalho mais profundo pode se estender por meses ou anos.",
    },
    {
      question: "A terapia é confidencial?",
      answer:
        "Sim, a confidencialidade é um princípio ético fundamental na psicanálise. Tudo o que é discutido nas sessões é mantido em sigilo, respeitando o código de ética profissional. Este sigilo só pode ser quebrado em situações específicas previstas por lei, como risco de vida para o paciente ou terceiros.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <SmoothScroll />
      <header className="py-6 border-b border-gray-200 fixed w-full bg-white z-10">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="logo">
            <Link href="/" aria-label="Página inicial">
              <Image
                aria-label="Página inicial"
                src="/images/Logo_nome.svg"
                alt="Logo de Vinícius Gomes - Psicólogo"
                width={400}
                height={50}
                priority
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#sobre" className="text-gray-600 hover:text-gray-900" aria-label="Saiba mais sobre mim">
              Sobre o Psicólogo
            </Link>
            <Link
              href="#terapia"
              className="text-gray-600 hover:text-gray-900"
              aria-label="Informações sobre a terapia"
            >
              Psicoterapia psicanalítica
            </Link>
            <Link href="#consultas" className="text-gray-600 hover:text-gray-900" aria-label="Detalhes sobre consultas">
              Consulta e valores
            </Link>
            <Link href="#duvidas" className="text-gray-600 hover:text-gray-900" aria-label="Perguntas frequentes">
              Dúvidas frequentes
            </Link>
            <Link
              href="#contato"
              className="text-gray-600 hover:text-gray-900"
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
                <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-800">
                  O sofrimento tem sentido – escutá-lo é o primeiro passo
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Há momentos em que a estrutura que nos sustenta começa a ruir, e é nesse ponto que a análise pode
                  fazer a diferença. Não se trata de simplesmente eliminar os sintomas, mas de escutá-los e compreender
                  o que eles revelam.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  A psicanálise não promete uma vida sem dores, mas possibilita a construção de um caminho em que seja
                  possível estabelecer uma relação mais saudável consigo, com o outro e com a própria vida. Para isso, é
                  preciso um analista – e estou aqui para acompanhar você nesse processo de mudança.
                </p>
                <div id="first" className="buttonBox relative inline-block">
                  <button
                    type="button"
                    className="bg-gray-800 text-white px-6 py-3 relative z-10 hover:bg-gray-700 transition-colors"
                  >
                    Agende sua consulta
                  </button>
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
                    sizes="(max-width: 768px) 100vw, 50vw"
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
                <div className="relative w-full h-[500px] md:h-[600px]">
                  <Image
                    src="/images/Sobre-mim.jpg"
                    alt="Vinícius Sant'Ana Gomes - Psicólogo"
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </div>
              <div className="w-full md:w-3/5">
                <h2 className="text-3xl md:text-4xl font-serif mb-8 text-gray-800 text-center">Sobre mim</h2>
                <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
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
                <h2 className="text-3xl md:text-4xl font-serif mb-8 text-gray-800 text-center">
                  A clínica psicanalítica
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
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

        <section id="consultas" className="section min-h-[90vh] flex items-center bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 py-24">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif mb-10 text-gray-800">Consultas e Valores</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
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

        <section id="duvidas" className="section min-h-[90vh] flex items-center">
          <div className="container mx-auto px-4 md:px-6 py-24">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif mb-10 text-gray-800 text-center">Dúvidas Frequentes</h2>
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>

        <section id="contato" className="section min-h-[90vh] flex items-center bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 py-24">
            <div className="flex flex-col md:flex-row gap-12 md:gap-16">
              <div className="w-full md:w-3/5">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-800">
                  ENTRE EM CONTATO E AGENDE SUA CONSULTA
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Preencha o formulário abaixo para tirar dúvidas ou marcar sua primeira sessão. Estou aqui para ajudar
                  você a iniciar uma jornada de autoconhecimento e bem-estar. Se preferir, entre em contato diretamente
                  pelo WhatsApp ou e-mail.
                </p>
                <ContactForm />
              </div>
              <div className="w-full md:w-2/5">
                <div className="space-y-10">
                  <div>
                    <h3 className="text-xl font-serif mb-4 text-gray-800 uppercase">WhatsApp</h3>
                    <p className="text-2xl font-medium">(21) 99999-9999</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif mb-4 text-gray-800 uppercase">E-mail</h3>
                    <p className="text-2xl font-medium">contato@viniciusgomes.com</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif mb-4 text-gray-800 uppercase">Consultório</h3>
                    <p className="text-2xl font-medium">Rua Nome da Rua, 123, Campos dos Goytacazes - RJ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        href="https://wa.me/5521999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        aria-label="Contato via WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </a>
    </div>
  )
}
