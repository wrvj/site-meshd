import React, { useRef, useState } from "react";
import { ContactFormContainer } from "./style";
import FormControl from "@mui/material/FormControl";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

import { Button, FormHelperText, TextField } from "@mui/material";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ContactForm() {
  async function handleSubmit() {
    const token = await reRef.current?.executeAsync();
    reRef.current?.reset();
    const { data }: any = await axios.post(
      "https://us-central1-meshd-4c2df.cloudfunctions.net/hello",
      {
        text: `Name: ${guestName} Email: ${guestEmail} Message: ${message}`,
        reToken: token,
      }
    );
    console.log(data.mail ? true : false);

    if (data.mail) {
      setGuestEmail("");
      setGuestName("");
      setMessage("");
      setOpen(true);
    }
  }

  const [guestEmail, setGuestEmail] = useState("");
  const [guestName, setGuestName] = useState("");
  const [message, setMessage] = useState("");

  const reRef = useRef<ReCAPTCHA>(null);

  const [open, setOpen] = React.useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <ContactFormContainer>
      {/* ReCAPTCHA */}
      {process.env.REACT_APP_RECAPTCHA_SITE_KEY && (
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          size="invisible"
          ref={reRef}
        />
      )}

      {/* Snackbar */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Your message was sent. We will get in touch soon!
        </Alert>
      </Snackbar>

      <div className="form-container" id="form-contact">
        <h1>Say hi!</h1>

        <FormControl variant="filled" sx={{ m: 1, width: "100%" }}>
          <TextField
            id="quote-form-email-input"
            label="Email"
            variant="filled"
            type="email"
            required
            value={guestEmail}
            onChange={(event) => {
              setGuestEmail(event.target.value);
            }}
          />
          <FormHelperText sx={{ m: 1 }}>
            Your or your company's email.
          </FormHelperText>
        </FormControl>

        <FormControl variant="filled" sx={{ m: 1, width: "100%" }}>
          <TextField
            id="quote-form-name-input"
            label="Name"
            variant="filled"
            required
            value={guestName}
            onChange={(event) => {
              setGuestName(event.target.value);
            }}
          />
          <FormHelperText sx={{ m: 1 }}>
            Your or your company's name.
          </FormHelperText>
        </FormControl>

        <FormControl variant="filled" sx={{ m: 1, width: "100%" }}>
          <TextField
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            id="quote-form-name-input"
            label="Message"
            multiline
            rows={3}
            maxRows={Infinity}
            variant="filled"
            required
            value={message}
          />
          <FormHelperText sx={{ m: 1 }}>Message.</FormHelperText>
        </FormControl>
        <Button id="contact-form-submit" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </ContactFormContainer>
  );
}
