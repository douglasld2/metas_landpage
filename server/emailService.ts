
import nodemailer from 'nodemailer';
import dotenv from "dotenv";
dotenv.config()

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'mail.resolutesoftware.com.br',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
  connectionTimeout: 15000,
  greetingTimeout: 15000,
  socketTimeout: 15000,
});

transporter.verify(function (error, success) {
  if (error) {
    console.log("Erro ao conectar com o SMTP:", error);
  } else {
    console.log("Conectado com sucesso ao servidor SMTP!");
  }
});
 
export const sendContactEmail = async (data: {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}) => {
  console.log(data)
  console.log(process.env.SMTP_USER)

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.ADMIN_EMAIL || 'contato@resolutemetas.com.br',
    subject: `Nova mensagem de contato - ${data.name}`,
    html: `
      <h2>Nova mensagem de contato</h2>
      <p><strong>Nome:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Telefone:</strong> ${data.phone}</p>
      <p><strong>Empresa:</strong> ${data.company}</p>
      <p><strong>Mensagem:</strong> ${data.message}</p>
    `,
  });
};
