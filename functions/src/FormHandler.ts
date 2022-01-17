import * as functions from "firebase-functions";
import * as nodemailer from 'nodemailer';

const SMTP_CONFIG = require ('./config/smtp');

const transporter = nodemailer.createTransport({
  host: SMTP_CONFIG.host,
  port: SMTP_CONFIG.port,
  secure: false,
  auth: {
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
})


export default async function handleFormRequest(req: any, res: any) {
  functions.logger.info(req.body, {
    structuredData: true,
  });

  const mailSent = await transporter.sendMail({
    text: req.body.text,
    subject: "Contact form",
    from: 'Meshd Web <meshd.mailer@gmail.com>',
    to: ['wiljunior33@gmail.com'],
  })

  return res.status(200).send({message: "Deu certo, por hoje.", mail: mailSent});
}
