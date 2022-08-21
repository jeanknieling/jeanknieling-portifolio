import { IconType } from "react-icons";
import { ProjectCardStyled } from "./style";


interface IProjectsCardProps {
  imageUrl: string;
  imageDescription: string;
  title: string;
  technologies: string;
  description: string;
  linkVercel: string;
  iconVercel: {name: string, Icon: IconType};
  linkGithub: string;
  iconGithub: {name: string, Icon: IconType};
}
export const ProjectCard: React.FC<IProjectsCardProps> = ({
  imageUrl,
  imageDescription,
  title,
  technologies,
  description,
  linkVercel,
  iconVercel,
  linkGithub,
  iconGithub,
}) => {
  return (
    <ProjectCardStyled>
      <img src={imageUrl} alt={imageDescription} width="150" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p><span>Tecnologias: </span>{technologies}</p>
      </div>
      <div>
        <a href={linkVercel} target="_blank">{iconVercel.name}{<iconVercel.Icon/>}</a>
        <a href={linkGithub} target="_blank">{iconGithub.name}{<iconGithub.Icon/>}</a>
      </div>
    </ProjectCardStyled>
  );
};
