"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import SmoothScroll from "./components/smooth-scroll"
import FAQAccordion from "./components/faq-accordion"
import ContactForm from "./components/contact-form"
import { Mail, Phone, FileText } from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [mobileMenuOpen])

  const faqItems = [
    {
      question: "Como funciona uma análise?",
      answer:
        "O processo psicanalítico começa com algumas entrevistas iniciais, conhecidas como entrevistas preliminares. Nesse momento, o analista escuta as demandas do paciente, busca compreender suas questões e avalia se o processo terapêutico é possível. Se ambos decidirem dar continuidade, inicia-se a análise propriamente dita. A psicanálise acontece por meio da fala do analisando, com a escuta atenta do analista, que intervém para ajudar na construção de novos sentidos.",
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
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
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
          <button
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
          >
            <svg
              xmlns="/images/Logo_nome.svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4 border-b border-gray-200">
          <button onClick={closeMobileMenu} aria-label="Fechar menu" className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="/images/Logo_nome.svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-4">
          <Link
            href="#sobre"
            className="text-gray-600 hover:text-gray-900 py-3 border-b border-gray-100"
            aria-label="Saiba mais sobre mim"
            onClick={closeMobileMenu}
          >
            Sobre o Psicólogo
          </Link>
          <Link
            href="#terapia"
            className="text-gray-600 hover:text-gray-900 py-3 border-b border-gray-100"
            aria-label="Informações sobre a terapia"
            onClick={closeMobileMenu}
          >
            Psicoterapia psicanalítica
          </Link>
          <Link
            href="#consultorio"
            className="text-gray-600 hover:text-gray-900 py-3 border-b border-gray-100"
            aria-label="Conheça meu consultório"
            onClick={closeMobileMenu}
          >
            Meu Consultório
          </Link>
          <Link
            href="#consultas"
            className="text-gray-600 hover:text-gray-900 py-3 border-b border-gray-100"
            aria-label="Detalhes sobre consultas"
            onClick={closeMobileMenu}
          >
            Consulta e valores
          </Link>
          <Link
            href="#duvidas"
            className="text-gray-600 hover:text-gray-900 py-3 border-b border-gray-100"
            aria-label="Perguntas frequentes"
            onClick={closeMobileMenu}
          >
            Dúvidas frequentes
          </Link>
          <Link
            href="#contato"
            className="text-gray-600 hover:text-gray-900 py-3"
            aria-label="Formas de entrar em contato"
            onClick={closeMobileMenu}
          >
            Contato e agendamento
          </Link>
        </nav>
      </div>

      <main className="flex-grow pt-24">
        <div className="mobile-container mx-auto max-w-[90%] md:max-w-none"></div>
          <section id="home" className="hero py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2 flex flex-col md:order-1">
                  <div className="order-1">
                    <h2 className="text-2xl md:text-4xl font-serif mb-6 text-gray-900 tracking-wide">
                      O sofrimento tem sentido – escutá-lo é o primeiro passo
                    </h2>
                    <p className="text-base md:text-[22px] mb-8 leading-relaxed text-gray-900 text-justify">
                      Há momentos em que a estrutura que nos sustenta começa a ruir, e é nesse ponto que a análise pode
                      fazer a diferença. Não se trata de simplesmente eliminar os sintomas, mas de escutá-los e
                      compreender o que eles revelam.
                    </p>
                  </div>

                  <div className="order-4 md:order-2">
                    <p className="text-base md:text-[22px] mb-8 leading-relaxed text-gray-900 text-justify">
                      A psicanálise não promete uma vida sem dores, mas possibilita a construção de um caminho em que
                      seja possível estabelecer uma relação mais saudável consigo, com o outro e com a própria vida.
                      Para isso, é preciso um analista – e estou aqui para acompanhar você nesse processo de mudança.
                    </p>
                  </div>

                  <div className="hidden md:block order-2">
                    <div id="first-desktop" className="buttonBox relative inline-block z-0">
                      <a
                        href="https://linktr.ee/psiviniciusgomes?utm_source=linktree_profile_share&ltsid=63eaa951-9664-43fe-b37e-346f4e9278e3"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
                </div>

                <div className="w-full md:w-1/2 order-2 md:order-2 my-8 md:my-0">
                  <div className="relative w-[85%] md:w-full h-[300px] md:h-[500px] mx-auto">
                    <Image
                      src="/images/Vini-Home.jpg"
                      alt="Imagem ilustrativa sobre psicologia e terapia"
                      fill
                      className="object-cover"
                      sizes="(max-width: 750px) 85vw, 50vw"
                    />
                  </div>
                </div>

                <div className="w-full order-3 md:hidden flex justify-center my-4">
                  <div id="first-mobile" className="buttonBox relative inline-block z-0">
                    <a
                      href="https://linktr.ee/psiviniciusgomes?utm_source=linktree_profile_share&ltsid=63eaa951-9664-43fe-b37e-346f4e9278e3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
              </div>
            </div>
          </section>

          <section id="sobre" className="section min-h-[90vh] flex items-center bg-gray-50">
            <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
              <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
                <div className="w-full md:w-2/5">
                  <div className="relative w-[85%] md:w-full h-[350px] md:h-[600px] mx-auto">
                    <Image
                      src="/images/teste.jpg"
                      alt="Vinícius Sant'Ana Gomes - Psicólogo"
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 85vw, 40vw"
                      unoptimized
                    />
                  </div>
                </div>
                <div className="w-full md:w-3/5">
                  <h2 className="text-2xl md:text-4xl font-serif mb-6 md:mb-8 text-gray-900 text-center">Sobre mim</h2>
                  <div className="text-base space-y-4 md:space-y-6 text-gray-900 leading-relaxed text-sm md:text-[22px] text-justify">
                    <p>
                      Meu nome é Vinícius Sant'Ana Gomes e sou psicólogo pelo Instituto Superior de Ensino do CENSA, em
                      Campos dos Goytacazes. Atuo com base na psicanálise e em sua ética, oferecendo atendimentos
                      presenciais e online.
                    </p>
                    <p>
                      A clínica psicanalítica, para mim, é mais do que um método terapêutico; é um modo de estar no
                      mundo, um estilo de vida que se transmite de inconsciente para inconsciente. É um caminho que me
                      dá liberdade, que não se encaixa em um modelo engessado de diagnóstico, rotulação ou separação dos
                      sintomas. Em vez disso, permite olhar para a história do sujeito, para aquilo que se desenrola
                      singularmente em cada análise.
                    </p>
                    <p>
                      Além disso, tenho experiência em serviços de saúde mental, como o CAPS, o que me permitiu
                      desenvolver um olhar atento às complexidades do sofrimento psíquico e às relações entre a clínica
                      e a sociedade.
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
            <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
              <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
                <div className="w-full md:w-3/5 order-2 md:order-1">
                  <h2 className="text-2xl md:text-4xl font-serif mb-6 md:mb-8 text-gray-800 text-center">
                    A clínica psicanalítica
                  </h2>
                  <div className="text-base space-y-4 md:space-y-6 text-gray-900 leading-relaxed text-sm md:text-[22px] text-justify">
                    <p>
                      A clínica psicanalítica é um espaço voltado para o aprofundamento da subjetividade, onde o
                      indivíduo tem a oportunidade de explorar seus conflitos internos, angústias e questões não
                      resolvidas. A partir de uma escuta atenta e neutra, busca-se compreender as dinâmicas
                      inconscientes que moldam pensamentos, emoções e comportamentos, com o objetivo de promover uma
                      transformação significativa.
                    </p>
                    <p>
                      Na psicanálise, o paciente é incentivado a utilizar a livre associação de ideias, permitindo que
                      seus pensamentos se conectem livremente, sem censura, o que favorece o surgimento de reflexões e
                      insights. Em vez de oferecer conselhos, o trabalho se concentra em estimular uma análise
                      verdadeira, com um olhar voltado para dentro, para que o sujeito possa se confrontar com suas
                      próprias questões. Esse processo é essencial para que o paciente modifique gradualmente sua
                      relação com seus desejos, traumas e tensões internas, alcançando maior autonomia e capacidade de
                      lidar com suas escolhas e desafios.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-2/5 order-1 md:order-2">
                  <div className="relative w-[85%] md:w-full h-[350px] md:h-[600px] mx-auto">
                    <Image
                      src="/images/clinica-psica.jpg"
                      alt="Clínica psicanalítica"
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 85vw, 40vw"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

        <section id="consultorio" className="section min-h-[90vh] bg-gray-50">
            <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
              {/* Primeira divisão */}
              <div className="mb-16 md:mb-24">
                <div className="flex items-center justify-center mb-8 md:mb-12">
                  <h2 className="text-2xl md:text-5xl font-serif text-gray-800 mr-4 md:mr-6">Meu Consultório</h2>
                  <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-[#c4bcab]"></div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-2/5">
                  <div
                    className="relative w-full h-[400px] cursor-pointer"
                  >
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
                      <p className="text-xl text-gray-900">Acolhedor</p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-3/5">
                  <div
                    className="relative w-full h-[400px] cursor-pointer"
                  >
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
                      <p className="text-xl text-gray-900">Confortável</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-24">
              <div className="flex justify-center relative">
                <div className="w-full max-w-4xl relative pl-0 md:pl-36">
                  <div className="absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 hidden md:block">
                    <div className="w-40 h-40 rounded-full bg-[#c4bcab]"></div>
                  </div>

                  <div
                    className="relative w-full h-[450px] md:h-[550px] cursor-pointer"
                  >
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

        <section id="consultas" className="section min-h-[90vh] flex items-center">
            <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
              <div className="max-w-[85%] md:max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-4xl font-serif mb-6 md:mb-10 text-gray-900">Consultas e Valores</h2>
                <div className="text-base space-y-4 md:space-y-6 text-gray-900 leading-relaxed text-sm md:text-[22px] text-center">
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
            <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
              <div className="max-w-[85%] md:max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-serif mb-6 md:mb-10 text-gray-800 text-center">
                  Dúvidas Frequentes
                </h2>
                <FAQAccordion items={faqItems} />
              </div>
            </div>
          </section>

          <section id="contato" className="section min-h-[90vh] flex items-center bg-white">
            <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 max-w-[85%] md:max-w-none mx-auto">
                <div className="w-full md:w-3/5">
                  <h2 className="text-2xl md:text-5xl font-serif mb-4 md:mb-6 text-gray-900">
                    Entre em contato e agende sua consulta
                  </h2>
                  <p className="text-1xl md:text-base mb-6 md:mb-8 text-justify tracking-wide text-gray-900">
                    Preencha o formulário abaixo para tirar dúvidas ou marcar sua primeira sessão. Estou aqui para
                    ajudar você a iniciar uma jornada de autoconhecimento e bem-estar. Se preferir, entre em contato
                    diretamente pelo WhatsApp ou e-mail.
                  </p>
                  <ContactForm />
                </div>

              <div className="w-full md:w-2/5">
                <div className="pt-6 md:pt-[230px] space-y-6">
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-3">
                      <svg
                        xmlns=""
                        className="w-6 h-6 text-gray-900"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <h3 className="text-xl font-serif text-gray-900 uppercase">WhatsApp</h3>
                    </div>
                    <p className="text-2xl font-medium text-gray-900 ml-9">(22) 99874-2955</p>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center space-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-gray-900"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                      <h3 className="text-xl font-serif text-gray-900 uppercase">E-mail</h3>
                    </div>
                    <p className="text-2xl font-medium text-gray-900 ml-9">psi.viniciussantana@gmail.com</p>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center space-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-gray-900"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" x2="8" y1="13" y2="13"></line>
                        <line x1="16" x2="8" y1="17" y2="17"></line>
                        <line x1="10" x2="8" y1="9" y2="9"></line>
                      </svg>
                      <h3 className="text-xl font-serif text-gray-900 uppercase">CRP</h3>
                    </div>
                    <p className="text-2xl font-medium text-gray-900 ml-9">05/79562</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-gray-600 text-sm">© 2025 Vinícius Gomes - Psicólogo | Todos os Direitos Reservados.</p>
        </div>
      </footer>

    </div>
  )
}
