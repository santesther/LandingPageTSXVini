"use client"

import type React from "react"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      // Aqui você implementaria a lógica para enviar o formulário
      // Por exemplo, usando fetch para enviar para uma API

      // Simulando um envio bem-sucedido após 1 segundo
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setSubmitError("Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {submitSuccess ? (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-6">
          <p>Mensagem enviada com sucesso! Entrarei em contato em breve.</p>
        </div>
      ) : null}

      {submitError ? (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mb-6">
          <p>{submitError}</p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu Nome"
            required
            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Seu E-mail"
            required
            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white"
          />
        </div>

        <div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Assunto"
            required
            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white"
          />
        </div>

        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Mensagem"
            required
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-green-700 text-white font-medium uppercase hover:bg-green-800 transition-colors disabled:opacity-70"
          >
            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </div>
      </form>
    </div>
  )
}

