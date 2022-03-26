'use strict';

import handleFormRequest from "./FormHandler";

const functions = require('firebase-functions');
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors')({ origin: true });
const app = express();

app.use(fileUpload());

app.use(cors);
app.use(express.json());
app.use(express.urlencoded());

// app.get('*', (req: any, res: any) => {
//   res.send(`Hello, world`);
// });

app.post('*', (req: any, res: any) => {
  handleFormRequest(req, res);
});

exports.hello = functions.https.onRequest(app);