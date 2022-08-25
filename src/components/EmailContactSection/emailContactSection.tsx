import emailjs from "@emailjs/browser";
import { BlockerDiv } from "../../components";
import { StyledEmailContactSection } from "./style";

export const EmailContactSection = () => {
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "GmailMessage",
        "template_zncpk1d",
        e.target,
        "Nq1pG0BlHH65qJXyu"
      )
      .then(
        (result) => {
          alert("Mensagem enviada com sucesso");
        },
        (error) => {
          alert(error.message);
        }
      );
    e.target.reset();
  };

  return (
    <StyledEmailContactSection>
      <BlockerDiv id="contactSection" />

      <h3>CONTATO POR EMAIL</h3>
      <form onSubmit={(e) => sendEmail(e)}>
        <label>
          Assunto
          <input type="text" name="subject" />
        </label>

        <label>
          Nome
          <input type="text" name="name" />
        </label>

        <label>
          Email
          <input type="email" name="email" />
        </label>

        <label>
          Mensagem
          <textarea name="message" />
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </StyledEmailContactSection>
  );
};
