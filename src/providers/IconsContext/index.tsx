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
  iconsTechStackData: { name: string; Icon: IconType | string; link: string }[];
  iconsToolsStackData: {
    name: string;
    Icon: IconType | string;
    link: string;
  }[];
  iconsStudingStackData: {
    name: string;
    Icon: IconType | string;
    link: string;
  }[];
  iconsAgileMethodologiesStackData: {
    name: string;
    Icon: IconType | string;
    link: string;
  }[];
}
[];

const iconsTechStackData = [
  { name: "Git", Icon: FaGitAlt, link: "https://git-scm.com/" },
  { name: "HTML5", Icon: FaHtml5, link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML" },
  { name: "CSS3", Icon: FaCss3Alt, link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS" },
  { name: "Javascript", Icon: DiJavascript, link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" },
  { name: "React", Icon: FaReact, link: "https://pt-br.reactjs.org" },
  { name: "Redux", Icon: SiRedux, link: "https://redux.js.org" },
  { name: "", Icon: "CONTEXTAPI", link: "https://pt-br.reactjs.org/docs/context.html" },
  { name: "Styled Components", Icon: SiStyledcomponents, link: "https://styled-components.com" },
  { name: "Vite", Icon: SiVite, link: "https://vitejs.dev" },
  { name: "Typescript", Icon: SiTypescript, link: "https://www.typescriptlang.org" },
  { name: "NodeJs", Icon: FaNodeJs, link: "https://nodejs.org/en" },
  { name: "", Icon: "API REST", link: "https://www.redhat.com/pt-br/topics/api/what-is-a-rest-api" },
  { name: "Express", Icon: SiExpress, link: "https://expressjs.com/pt-br" },
  { name: "", Icon: "TYPEORM", link: "https://typeorm.io" },
  { name: "JWT", Icon: SiJsonwebtokens, link: "https://jwt.io" },
  { name: "Jest", Icon: SiJest, link: "https://jestjs.io/pt-BR" },
  { name: "PostgreSQL", Icon: SiPostgresql, link: "https://www.postgresql.org" },
  { name: "Python", Icon: FaPython, link: "https://www.python.org" },
  { name: "Django", Icon: SiDjango, link: "https://www.djangoproject.com" },
];

const iconsToolsStackData = [
  { name: "Yarn", Icon: FaYarn, link: "https://yarnpkg.com" },
  { name: "Heroku", Icon: SiHeroku, link: "https://www.heroku.com" },
  { name: "Vercel", Icon: SiVercel, link: "https://vercel.com" },
  { name: "Docker", Icon: FaDocker, link: "https://www.docker.com" },
  { name: "Insomnia", Icon: SiInsomnia, link: "https://insomnia.rest" },
  { name: "Swagger", Icon: SiSwagger, link: "https://swagger.io" },
  { name: "", Icon: "beekeeper", link: "https://www.beekeeperstudio.io" },
  { name: "npm", Icon: SiNpm, link: "https://www.npmjs.com" },
  { name: "Trello", Icon: FaTrello, link: "https://trello.com" },
  { name: "Notion", Icon: SiNotion, link: "https://www.notion.so/product" },
  { name: "Figma", Icon: FaFigma, link: "https://www.figma.com" },
  { name: "VS Code", Icon: SiVisualstudiocode, link: "https://code.visualstudio.com" },
  { name: "Github", Icon: FaGithub, link: "https://github.com" },
  { name: "Jira", Icon: FaJira, link: "https://www.atlassian.com/software/jira" },
];

const iconsStudingStackData = [
  { name: "AWS", Icon: FaAws, link: "https://aws.amazon.com/pt" },
  { name: "MongoDB", Icon: SiMongodb, link: "https://www.mongodb.com" },
  { name: "Material UI", Icon: SiMaterialui, link: "https://mui.com/pt" },
];

const iconsAgileMethodologiesStackData = [
  { name: "Scrum", Icon: DiScrum, link: "https://www.scrum.org" },
  { name: "Kanban", Icon: BsKanban, link: "https://pt.wikipedia.org/wiki/Kanban" },
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
