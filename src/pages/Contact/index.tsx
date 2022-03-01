import React from "react";
import { ContactContainer } from "./styles";
import ContactForm from "../../common/ContactForm";

export default function Contact() {
  return (
    <ContactContainer>
      <div className="content">
        <h2>HOW CAN WE HELP? WE GOT YOU!</h2>
        <p>Fill out the form and we’ll get back to you shortly.</p>
        <ContactForm />
      </div>
    </ContactContainer>
  );
}
