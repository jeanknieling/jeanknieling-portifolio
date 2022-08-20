import { IconType } from "react-icons";
import {
  FaGithub,
  FaGitlab,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import {
  SiVercel,
} from "react-icons/si";
import { SocialNetworksStyled } from "./style";

interface ISocialNetworksMenu {
  link: string;
  Icon: IconType;
}

const menu: Array<ISocialNetworksMenu> = [
  { link: "https://www.linkedin.com/in/jeanknieling", Icon: FaLinkedin },
  { link: "https://github.com/jeanknieling", Icon: FaGithub },
  { link: "https://gitlab.com/jeanknieling", Icon: FaGitlab },
  { link: "https://vercel.com/jeanknieling", Icon: SiVercel },
  { link: "https://wa.me/5555999159950", Icon: FaWhatsapp },
  { link: "https://www.instagram.com/jeanknieling", Icon: FaInstagram },
];

export const SocialNetworks = () => {
  return (
    <SocialNetworksStyled>
      <ul>
        {menu.map((item, index) => {
          const { Icon, link } = item;
          return (
            <li key={index}>
              <a href={link} target="_blank">
                <Icon />
              </a>
            </li>
          );
        })}
      </ul>
    </SocialNetworksStyled>
  );
};
