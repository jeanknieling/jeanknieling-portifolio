import { IconType } from "react-icons";
import { DiJavascript } from "react-icons/di";
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiDjango,
  SiExpress,
  SiJest,
  SiJsonwebtokens,
  SiPostgresql,
  SiRedux,
  SiStyledcomponents,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { TechStackStyled } from "../TechStack/style";

interface ITechStack {
  name: string;
  Icon: IconType | string;
}

const menu: Array<ITechStack> = [
  { name: "Git", Icon: FaGitAlt },
  { name: "HTML5", Icon: FaHtml5 },
  { name: "CSS3", Icon: FaCss3Alt },
  { name: "Javascript", Icon: DiJavascript },
  { name: "React", Icon: FaReact },
  { name: "Redux", Icon: SiRedux },
  { name: "", Icon: "CONTEXTAPI" },
  { name: "Styled Components", Icon: SiStyledcomponents },
  { name: "Vite", Icon: SiVite },
  { name: "Typescript", Icon: SiTypescript },
  { name: "NodeJs", Icon: FaNodeJs },
  { name: "Express", Icon: SiExpress },
  { name: "", Icon: "API REST" },
  { name: "", Icon: "TYPEORM" },
  { name: "Json Web Tokens", Icon: SiJsonwebtokens },
  { name: "Jest", Icon: SiJest },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Python", Icon: FaPython },
  { name: "Django", Icon: SiDjango },
];

export const TechStack = () => {
  return (
    <TechStackStyled>
      <ul>
        {menu.map((item, index) => {
          const { Icon, name } = item;
          return (
            <li key={index}>
              <a href="" target="_blank">
                {typeof Icon !== "string" ? <Icon size={40} /> : <p>{Icon}</p>}
              </a>
            </li>
          );
        })}
      </ul>
    </TechStackStyled>
  );
};

/* export const SocialNetworks = () => {
  return (
    <SocialNetworksStyled>
      <ul>
        {menu.map((item, index) => {
          const { Icon, link } = item;
          return (
            <li key={index}>
              <a href={link}>
                <Icon size={35} color="blue" />
              </a>
            </li>
          );
        })}
      </ul>
    </SocialNetworksStyled>
  );
}; */
