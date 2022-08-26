import emailjs from "@emailjs/browser";
import { BlockerDiv } from "../../components";
import { useScrollContext } from "../../providers";
import { StyledEmailContactSection } from "./style";
import { toast } from "react-toastify";


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
          toast.success("Mensagem enviada com sucesso");
        },
        (error) => {
          toast.success(error.message);
        }
      );
    e.target.reset();
  };

  const { contactAnimation } = useScrollContext();

  return (
    <StyledEmailContactSection contactAnimation={contactAnimation}>
      <BlockerDiv id="contactSection" />

      <h3>CONTATO POR EMAIL</h3>
      <form onSubmit={(e) => sendEmail(e)}>
        <div>
          <input type="text" id="subject" name="subject" placeholder="Digite o assunto aqui..."/>
          <label htmlFor="subject">Assunto</label>
        </div>

        <div>
          <input type="text" id="name" name="name" placeholder="Digite seu nome aqui..."/>
          <label htmlFor="name">Nome</label>
        </div>

        <div>
          <input type="text" id="email" name="email" placeholder="Digite seu email aqui..."/>
          <label htmlFor="email">Email</label>
        </div>

        <div>
          <textarea id="message" name="message" placeholder="Digite alguma mensagem aqui..."/>
          <label htmlFor="message">Mensagem</label>
        </div>

        <input type="submit" value="Enviar" />
      </form>
    </StyledEmailContactSection>
  );
};
