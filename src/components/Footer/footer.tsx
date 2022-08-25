import { MdCopyright } from "react-icons/md";
import { SocialNetworks, BlockerDiv } from "../../components";
import { FooterStyled } from "./style";

export const Footer = () => {
  return (
    <FooterStyled>
      <BlockerDiv id="contactSection" />

      <SocialNetworks />
      <p>
        <MdCopyright />
        Copyright 2022
      </p>
      <p>
        Portfólio | Desenvolvido por{" "}
        <a href="https://www.linkedin.com/in/jeanknieling/" target="_blank">
          Jean Knieling dos Santos
        </a>
      </p>
    </FooterStyled>
  );
};
