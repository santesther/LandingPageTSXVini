require("dotenv").config()
console.log("Email:", process.env.EMAIL_USER) 
console.log("Senha:", process.env.EMAIL_PASS ? "Definida" : "Não definida")

require("dotenv").config()
const express = require("express")
const nodemailer = require("nodemailer")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())

// Configuração do Nodemailer para Outlook
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // O Outlook usa STARTTLS, então não deve ser "true"
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false, // Evita erro de certificado SSL em alguns casos
    },
  })

  app.post("/send-email", async (req, res) => {
    const { name, email, subject, message } = req.body
  
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "psi.viniciussantana@gmail.com",
      subject: subject || "Nova mensagem de contato",
      text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
    }
  
    try {
      await transporter.sendMail(mailOptions)
      res.status(200).json({ success: true, message: "Email enviado com sucesso!" })
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error) // <== Adicione esta linha para ver o erro
      res.status(500).json({ success: false, message: "Erro ao enviar email", error: error.message })
    }
  })

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
