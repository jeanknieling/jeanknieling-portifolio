import { RightAvatar } from "../../components";
import Gif from "./../../assets/loop.gif";
import MyPhoto from "./../../assets/original.jpg";

import { GifStyled, MyDescriptionStyled, PStyled } from "./style";

export const MyDescription: React.FC = () => {
  return (
    <MyDescriptionStyled>
      <RightAvatar
        url={MyPhoto}
        alt="Foto de perfil"
        size="280px"
        color="#f05600"
      />
      <GifStyled src={Gif} alt="Gif" />
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
          <span>WEB</span> <span>FULL STACK JR</span>
          <span>,</span>
        </h2>
      </div>
      <PStyled>
        Acredito no poder de transformação e evolução através da tecnologia, mas
        não apenas isso, também quero ser um exemplo de superação, esforço e
        dedicação aos meus filhos e esposa, isso me motiva a continuar minha
        jornada de estudos na área de programação, que de fato iniciou na Kenzie Academy
        Brasil a um ano e se depender de mim não terá data para terminar.
      </PStyled>
    </MyDescriptionStyled>
  );
};
//
