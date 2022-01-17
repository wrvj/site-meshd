import React, { useState } from "react";
import { ContactFormContainer } from "./style";
import FormControl from "@mui/material/FormControl";
import { Button, FormHelperText, TextField } from "@mui/material";
import axios from "axios";

export default function ContactForm() {
  function handleSubmit() {
    axios.post("https://us-central1-meshd-4c2df.cloudfunctions.net/hello", {
      text: `Name: ${guestName} Email: ${guestEmail} Message: ${message}`,
    });
  }

  const [guestEmail, setGuestEmail] = useState("");
  const [guestName, setGuestName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <ContactFormContainer>
      <div className="form-container" id="form-contact">
        <h1>Say hi!</h1>

        <FormControl variant="filled" sx={{ m: 1, width: "100%" }}>
          <TextField
            id="quote-form-email-input"
            label="Email"
            variant="filled"
            type="email"
            required
            onChange={(event) => {setGuestEmail(event.target.value)}}
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
            onChange={(event) => {setGuestName(event.target.value)}}
          />
          <FormHelperText sx={{ m: 1 }}>
            Your or your company's name.
          </FormHelperText>
        </FormControl>

        <FormControl variant="filled" sx={{ m: 1, width: "100%" }}>
          <TextField
            onChange={(event) => {setMessage(event.target.value)}}
            id="quote-form-name-input"
            label="Message"
            variant="filled"
            required
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
