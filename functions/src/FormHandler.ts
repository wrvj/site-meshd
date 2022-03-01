import * as functions from "firebase-functions";
import * as nodemailer from 'nodemailer';
import axios from 'axios';

const SMTP_CONFIG = require('./config/smtp');

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
});

interface iFormData {
  text: string;
  reToken: string;
}


export default async function handleFormRequest(req: any, res: any) {

  const formData: iFormData = req.body;
  const human = await validateHuman(formData.reToken);

  if (!human) {
    return res.status(400).send({ error: "You are not a human!" });
  }



  functions.logger.info(req.body, {
    structuredData: true,
  });

  const mailSent = await transporter.sendMail({
    text: formData.text,
    subject: "Contact form",
    from: 'Meshd Web <meshd.mailer@gmail.com>',
    to: ['wiljunior33@gmail.com'],
  })

  return res.status(200).send({ message: "Deu certo, por hoje.", mail: mailSent });
}

async function validateHuman(reToken: string): Promise<boolean> {
  const secret = functions.config().recaptcha.secret;
  const response: any = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${reToken}`,
    {},
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
      },
    },
  );


  functions.logger.info(response.data, {
    structuredData: true,
  });

  return response.data.success;
}
