import { MdCopyright } from "react-icons/md";
import { SocialNetworks } from "../../components";
import { FooterStyled } from "./style";

export const Footer = () => {
  return (
    <FooterStyled>
      <SocialNetworks />
      <p>
        <MdCopyright />
        Copyright 2022
      </p>
      <p>Portfólio | Desenvolvido por Jean Knieling dos Santos</p>
    </FooterStyled>
  );
};
