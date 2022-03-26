import * as functions from "firebase-functions";
import * as nodemailer from 'nodemailer';
import axios from 'axios';
import { generateNewToken } from "./ValidationToken";
import { saveNewFormData } from "./SaveData";
import { initializeApp } from 'firebase-admin/app';

initializeApp();

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
  email: string;
  name: string;
  company: string;
  fileFormats: any;
  services: any;
  description: string;
  variations: string;
  reToken: string;
}


export default async function handleFormRequest(req: any, res: any) {

  const formData: iFormData = req.body;
  const human = await validateHuman(formData.reToken);

  if (!human) {
    return res.status(400).send({ error: "You are not a human!" });
  }

  const requestId: string = await generateNewToken(formData.email);

  await transporter.sendMail({
    text: JSON.stringify(formData),
    subject: "Contact form - " + requestId,
    from: 'Meshd Web <meshd.mailer@gmail.com>',
    to: ['wiljunior33@gmail.com', 'contact@studiomeshd.com', 'monica@meshd.xyz', 'monica.yanhwa@gmail.com'],
  })

  saveNewFormData(formData);

  return res.status(200).send({ message: "Form successfully submited",  validationToken: requestId });
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
