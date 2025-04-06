// app/api/send-email/route.ts
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

console.log("ENV user:", process.env.EMAIL_USER)
console.log("ENV pass:", process.env.EMAIL_PASS ? "Definida" : "Não definida")


export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json()

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  })

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "psi.viniciussantana@gmail.com",
    subject: subject || "Nova mensagem de contato",
    text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true, message: "Email enviado com sucesso!" })
  } catch (error: any) {
    console.error("Erro ao enviar e-mail:", error)
    return NextResponse.json({ success: false, message: "Erro ao enviar email", error: error.message }, { status: 500 })
  }
}
