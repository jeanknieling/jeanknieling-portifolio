import {
  BlockerDiv,
  CVButton,
  RightAvatar,
  SocialNetworks,
} from "../../components";
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
        <BlockerDiv id="myDescriptionSection" />
        <RightAvatar
          url={MyPhoto}
          alt="Foto de perfil"
          size="280px"
          color="var(--blue-0)"
        />
        <div>
          <p>
            <span>Olá 🤓👍 </span>, Me chamo
          </p>

          <h1>
            <strong>JEAN KNIELING DOS SANTOS</strong>
          </h1>
          <p>
          <span>sou casado <span>👩‍❤️‍👨</span></span> <span>e tenho 3 filhos <span>👨‍👩‍👧‍👦</span></span>
          </p>
        </div>

        <div>
          <p>Sou desenvolvedor</p>
          <h2>
            <span>WEB</span> <span>FULL STACK</span>
          </h2>
        </div>
        <PStyled>
          Acredito no poder de transformação e evolução através da tecnologia,
          mas não apenas isso, também quero ser um exemplo de superação, esforço
          e dedicação para minha família. Isso me motiva a continuar nesta
          jornada de estudos na área de programação, que de fato iniciou na
          Kenzie Academy Brasil há quase um ano e se depender de mim não terá
          data para terminar, pois nessa área realmente me encontrei
          profissionalmente, gosto de desafios, de aprender constantemente e
          estar em contato com novas tecnologias que podem melhorar o desempenho
          das empresas e a vida das pessoas.
        </PStyled>
        <div>
          <CVButton
            id="teste"
            link="https://drive.google.com/file/d/13qdW7G_tj-336MHiCKqM1DhSsBZem1ha/view?usp=sharing"
            color="var(--white)"
            padding="20px"
            text="Meu Currículo"
          />
          <SocialNetworks />
        </div>
      </MyDescriptionStyled>
    </ContainerStyled>
  );
};
