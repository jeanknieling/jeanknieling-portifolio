import { MdCopyright } from "react-icons/md";
import { SocialNetworks } from "../../components";
import { FooterStyled } from "./style";

export const Footer = () => {
  return (
    <FooterStyled id="contact">
      <SocialNetworks />
      <p>
        <MdCopyright />
        Copyright 2022
      </p>
      <p>Portfólio | Desenvolvido por <a href="https://www.linkedin.com/in/jeanknieling/" target="_blank">Jean Knieling dos Santos</a></p>
    </FooterStyled>
  );
};
