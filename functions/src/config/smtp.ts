import * as functions from "firebase-functions";



module.exports = {
  host: 'smtp.gmail.com',
  port: 587,
  user: functions.config().mailer.user,
  pass: "yyiqrozpzrtqgnxa"
  // pass: functions.config().mailer.pass
}