import { CVButton, RightAvatar, SocialNetworks } from "../../components";
import MyPhoto from "./../../assets/avatar.jpeg";
import Wallpaper from "./../../assets/wallpaper.jpg";

import {
  ContainerStyled,
  MyDescriptionStyled,
  PStyled,
  WallpaperStyled,
} from "./style";

export const MyDescription: React.FC = () => {
  return (
    <ContainerStyled>
      <WallpaperStyled src={Wallpaper} alt="Gif" />
      <MyDescriptionStyled>
        <RightAvatar
          url={MyPhoto}
          alt="Foto de perfil"
          size="280px"
          color="#0055FF"
        />
        <div>
          <p>
            <span>Olá 🤓👍</span>
            <span>,</span>
          </p>
          <p>Me chamo</p>
          <h1>
            <span>JEAN KNIELING DOS SANTOS</span>
            <span>,</span>
          </h1>
          <p>
            sou casado <span>👩‍❤️‍👨</span> e tenho 3 filhos <span>👨‍👩‍👧‍👦</span>.
          </p>
        </div>

        <div>
          <p>Sou desenvolvedor</p>
          <h2>
            <span>WEB</span> <span>FULL STACK
              
            </span>
            <span>,</span>
          </h2>
        </div>
        <PStyled>
          Acredito no poder de transformação e evolução através da tecnologia,
          mas não apenas isso, também quero ser um exemplo de superação, esforço
          e dedicação aos meus filhos e esposa, isso me motiva a continuar minha
          jornada de estudos na área de programação, que de fato iniciou na
          Kenzie Academy Brasil a um ano e se depender de mim não terá data para
          terminar.
        </PStyled>
        <div>
          <CVButton
            id="teste"
            link="https://drive.google.com/file/d/13qdW7G_tj-336MHiCKqM1DhSsBZem1ha/view?usp=sharing"
            color="#F2F2F2"
            padding="20px"
            text="Meu Currículo"
          />
          <SocialNetworks />
        </div>
      </MyDescriptionStyled>
    </ContainerStyled>
  );
};
