import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import KenzieHamburgueriaGif from "../../assets/kenzie-hamburgueria.gif";
import KenzieHubGif from "../../assets/kenzie-hub.gif";
import MotorsShopGif from "../../assets/motors-shop.gif";
import NuKenzieGif from "../../assets/nu-kenzie.gif";
import { BlockerDiv, ProjectCard } from "../../components";
import { useScrollContext } from "../../providers";
import { ContainerStyled, LinkStyled, MyProjectsStyled } from "./style";

export const MyProjects = () => {
  const { projectsAnimation } = useScrollContext();

  return (
    <ContainerStyled>
      <MyProjectsStyled projectsAnimation={projectsAnimation}>
        <BlockerDiv id="projectsSection" />
        <h3>MEUS PROJETOS</h3>
        <section>
          <ProjectCard
            imageUrl={MotorsShopGif}
            imageDescription="Gif do projeto Motors Shop"
            title="Motors Shop"
            technologies="React, Typescript, React-router-dom, MUI, React-hook-form, Yup, Axios, NodeJS, Express, JWT, TypeORM, PostgreSQL, Docker"
            description="Projeto full-stack proposto com a finalidade de simular um App de compra e venda de veículos. Aqui treinamos tudo que aprendemos durante o curso, Back-and e Front-end"
            linkVercel="https://motors-shop.vercel.app/"
            iconVercel={{ name: "Vercel", Icon: SiVercel }}
            linkGithub="https://github.com/KA-07-Motors-Shop/project-motors-shop-front-end"
            iconGithub={{ name: "Github", Icon: FaGithub }}
          />
          <ProjectCard
            imageUrl={KenzieHubGif}
            imageDescription="Gif do projeto Kenzie Hub"
            title="Kenzie Hub"
            technologies="React, React-router-dom, Styled-components, React-hook-form, Yup, Axios"
            description="Projeto proposto para que treinássemos conceitos como(Componentes, props, callbacks, requisições, rotas, autenticação, enviar dados para a api)."
            linkVercel="https://react-entrega-s2-kenzie-hub-jeanknieling.vercel.app/"
            iconVercel={{ name: "Vercel", Icon: SiVercel }}
            linkGithub="https://github.com/jeanknieling/react-entrega-s2-kenzie-hub-jeanknieling"
            iconGithub={{ name: "Github", Icon: FaGithub }}
          />
          <ProjectCard
            imageUrl={KenzieHamburgueriaGif}
            imageDescription="Gif do projeto Hamburgueria da Kenzie"
            title="Hamburgueria da Kenzie"
            technologies="React, Styled-components"
            description="Projeto proposto com a finalidade de simular um E-commerce de comida. Treinamos conceitos como(Componentes, props, callbacks e principalmente responsividade com mobile-first)."
            linkVercel="https://react-entrega-s1-hamburgueria-da-kenzie-jeanknieling.vercel.app/"
            iconVercel={{ name: "Vercel", Icon: SiVercel }}
            linkGithub="https://github.com/jeanknieling/react-entrega-s1-hamburgueria-da-kenzie-jeanknieling"
            iconGithub={{ name: "Github", Icon: FaGithub }}
          />
          <ProjectCard
            imageUrl={NuKenzieGif}
            imageDescription="Gif do projeto Nu Kenzie"
            title="Nu Kenzie"
            technologies="React, Styled-components"
            description="Projeto proposto com a finalidade de simular um App de controle de finanças. Treinamos conceitos como(Componentes, props, callbacks e principalmente responsividade com mobile-first)."
            linkVercel="https://react-entrega-s1-nu-kenzie-jeanknieling.vercel.app/"
            iconVercel={{ name: "Vercel", Icon: SiVercel }}
            linkGithub="https://github.com/jeanknieling/react-entrega-s1-nu-kenzie-jeanknieling"
            iconGithub={{ name: "Github", Icon: FaGithub }}
          />
        </section>
        <LinkStyled href="https://github.com/jeanknieling" target="_blank">
          Veja mais...
        </LinkStyled>
      </MyProjectsStyled>
    </ContainerStyled>
  );
};
