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
import { useScrollContext } from "../../providers";
import { TechStackStyled } from "../TechStack/style";

interface ITechStackIcons {
  name: string;
  Icon: IconType | string;
}

const menu: Array<ITechStackIcons> = [
  { name: "Git", Icon: FaGitAlt },
  { name: "HTML5", Icon: FaHtml5 },
  { name: "CSS3", Icon: FaCss3Alt },
  { name: "Javascript", Icon: DiJavascript },
  { name: "React", Icon: FaReact },
  { name: "Redux", Icon: SiRedux },
  { name: "", Icon: "CONTEXTAPI" },
  { name: "", Icon: "API REST" },
  { name: "", Icon: "TYPEORM" },
  { name: "Styled Components", Icon: SiStyledcomponents },
  { name: "Vite", Icon: SiVite },
  { name: "Typescript", Icon: SiTypescript },
  { name: "NodeJs", Icon: FaNodeJs },
  { name: "Express", Icon: SiExpress },
  { name: "Json Web Tokens", Icon: SiJsonwebtokens },
  { name: "Jest", Icon: SiJest },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Python", Icon: FaPython },
  { name: "Django", Icon: SiDjango },
];

export const TechStack = () => {
  const { scrollY } = useScrollContext();

  return (
    <TechStackStyled scrollY={scrollY}>
      <h3>TECNOLOGIAS</h3>
      <ul>
        {menu.map((item, index) => {
          const { Icon, name } = item;
          return (
            <li key={index}>
              <a href="" target="_blank">
                {typeof Icon !== "string" ? <Icon /> : <p>{Icon}</p>}
              </a>
            </li>
          );
        })}
      </ul>
    </TechStackStyled>
  );
};
