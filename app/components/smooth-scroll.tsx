"use client"

import { useEffect } from "react"

export default function SmoothScroll() {
  useEffect(() => {
    // Função para lidar com cliques em links de âncora
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (!anchor) return

      // Verifica se o link é uma âncora interna
      if (anchor.hash && anchor.hash.startsWith("#") && anchor.pathname === window.location.pathname) {
        e.preventDefault()

        // Encontra o elemento alvo
        const targetId = anchor.hash.slice(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          // Calcula a posição considerando o header fixo (ajuste a altura conforme necessário)
          const headerOffset = 100 // Altura aproximada do header + algum espaço
          const elementPosition = targetElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          // Scroll suave para a posição
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }
    }

    // Adiciona o event listener
    document.body.addEventListener("click", handleAnchorClick)

    // Limpa o event listener quando o componente é desmontado
    return () => {
      document.body.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return null
}

