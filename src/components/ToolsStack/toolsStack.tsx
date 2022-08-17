import { IconType } from "react-icons";
import {
  FaDocker,
  FaFigma,
  FaGithub,
  FaJira,
  FaTrello,
  FaYarn,
} from "react-icons/fa";
import {
  SiHeroku,
  SiInsomnia,
  SiNotion,
  SiNpm,
  SiSwagger,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
import { useScrollContext } from "../../providers";
import { ToolsStackStyled } from "./style";

interface IToolsStack {
  name: string;
  Icon: IconType | string;
}

const menu: Array<IToolsStack> = [
  { name: "Yarn", Icon: FaYarn },
  { name: "Heroku", Icon: SiHeroku },
  { name: "Vercel", Icon: SiVercel },
  { name: "Docker", Icon: FaDocker },
  { name: "Insomnia", Icon: SiInsomnia },
  { name: "Swagger", Icon: SiSwagger },
  { name: "", Icon: "beekeeper" },
  { name: "npm", Icon: SiNpm },
  { name: "Trello", Icon: FaTrello },
  { name: "Notion", Icon: SiNotion },
  { name: "Figma", Icon: FaFigma },
  { name: "Visual Studio Code", Icon: SiVisualstudiocode },
  { name: "Github", Icon: FaGithub },
  { name: "Jira", Icon: FaJira },
];

export const ToolsStack = () => {

  const { scrollY} = useScrollContext();

  return (
    <ToolsStackStyled scrollY={scrollY}>
      <h3>FERRAMENTAS</h3>
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
    </ToolsStackStyled>
  );
};
