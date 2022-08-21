import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import KenzieHubGif from "../../assets/kenzie-hub.gif";
import { ProjectCard } from "../../components";
import { useScrollContext } from "../../providers";
import { ContainerStyled, MyProjectsStyled } from "./style";

export const MyProjects = () => {
  const {projectsAnimation} = useScrollContext()

  return (
    <ContainerStyled>
      <MyProjectsStyled id="projects" projectsAnimation={projectsAnimation}>
        <h3>MEUS PROJETOS</h3>
        <section>
          <ProjectCard
            imageUrl={KenzieHubGif}
            imageDescription="bla"
            title="Kenzie Hub"
            technologies="React, React-router-dom, Styled-components, React-hook-form, Yup, Axios"
            description="Projeto proposto para que treinássemos conceitos como(Componentes, props, callbacks, requisições, rotas, autenticação, enviar dados para a api, etc)."
            linkVercel="https://react-entrega-s2-kenzie-hub-jeanknieling.vercel.app/"
            iconVercel={{ name: "Vercel", Icon: SiVercel }}
            linkGithub="https://github.com/jeanknieling/react-entrega-s2-kenzie-hub-jeanknieling"
            iconGithub={{ name: "Github", Icon: FaGithub }}
          />
          <ProjectCard
            imageUrl="https://www.github.com/jeanknieling.png"
            imageDescription="bla"
            title="projeto top"
            technologies="muitas tecnologias interessantes"
            description="projeto bem legal de se fazer"
            linkVercel="https://www.github.com/jeanknieling"
            iconVercel={{ name: "Vercel", Icon: SiVercel }}
            linkGithub="https://www.github.com/jeanknieling"
            iconGithub={{ name: "Github", Icon: FaGithub }}
          />
          <ProjectCard
            imageUrl="https://www.github.com/jeanknieling.png"
            imageDescription="bla"
            title="projeto top"
            technologies="muitas tecnologias interessantes"
            description="projeto bem legal de se fazer"
            linkVercel="https://www.github.com/jeanknieling"
            iconVercel={{ name: "Vercel", Icon: SiVercel }}
            linkGithub="https://www.github.com/jeanknieling"
            iconGithub={{ name: "Github", Icon: FaGithub }}
          />
          <ProjectCard
            imageUrl="https://www.github.com/jeanknieling.png"
            imageDescription="bla"
            title="projeto top"
            technologies="muitas tecnologias interessantes"
            description="projeto bem legal de se fazer"
            linkVercel="https://www.github.com/jeanknieling"
            iconVercel={{ name: "Vercel", Icon: SiVercel }}
            linkGithub="https://www.github.com/jeanknieling"
            iconGithub={{ name: "Github", Icon: FaGithub }}
          />
        </section>
      </MyProjectsStyled>
    </ContainerStyled>
  );
};
