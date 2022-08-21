import { createContext, ReactNode, useContext } from "react";
import { IconType } from "react-icons";
import { BsKanban } from "react-icons/bs";
import { DiJavascript, DiScrum } from "react-icons/di";
import {
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJira,
  FaNodeJs,
  FaPython,
  FaReact,
  FaTrello,
  FaYarn,
} from "react-icons/fa";
import {
  SiDjango,
  SiExpress,
  SiHeroku,
  SiInsomnia,
  SiJest,
  SiJsonwebtokens,
  SiMaterialui,
  SiMongodb,
  SiNotion,
  SiNpm,
  SiPostgresql,
  SiRedux,
  SiStyledcomponents,
  SiSwagger,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
  SiVite,
} from "react-icons/si";

interface IIconsProviderProps {
  children: ReactNode;
}

interface IIconsContextData {
  iconsTechStackData: { name: string; Icon: IconType | string }[];
  iconsToolsStackData: { name: string; Icon: IconType | string }[];
  iconsStudingStackData: { name: string; Icon: IconType | string }[];
  iconsAgileMethodologiesStackData: { name: string; Icon: IconType | string }[];
}
[];

const iconsTechStackData = [
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
  { name: "", Icon: "API REST" },
  { name: "Express", Icon: SiExpress },
  { name: "", Icon: "TYPEORM" },
  { name: "JWT", Icon: SiJsonwebtokens },
  { name: "Jest", Icon: SiJest },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Python", Icon: FaPython },
  { name: "Django", Icon: SiDjango },
];

const iconsToolsStackData = [
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
  { name: "VS Code", Icon: SiVisualstudiocode },
  { name: "Github", Icon: FaGithub },
  { name: "Jira", Icon: FaJira },
];

const iconsStudingStackData = [
  { name: "AWS", Icon: FaAws },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Material UI", Icon: SiMaterialui },
];

const iconsAgileMethodologiesStackData = [
  { name: "Scrum", Icon: DiScrum },
  { name: "Kanbam", Icon: BsKanban },
];

const IconsContext = createContext({} as IIconsContextData);
export const IconsProvider: React.FC<IIconsProviderProps> = ({ children }) => {
  return (
    <IconsContext.Provider
      value={{
        iconsTechStackData,
        iconsToolsStackData,
        iconsStudingStackData,
        iconsAgileMethodologiesStackData,
      }}
    >
      {children}
    </IconsContext.Provider>
  );
};

export const useIconsContext = () => useContext(IconsContext);
