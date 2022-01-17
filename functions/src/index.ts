'use strict';

import handleFormRequest from "./FormHandler";

const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')({origin: true});
const app = express();

app.use(cors);
app.get('*', (req: any, res: any) => {
    res.send(`Hello, world`);
});
app.post('*', (req: any, res: any) => {
  handleFormRequest(req, res);
});

exports.hello = functions.https.onRequest(app);