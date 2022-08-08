import { RightAvatar } from "../RightAvatar/rightAvatar";
import LoopGif from "./../../assets/loop.gif";
import { EmogiSpan, GifStyled, MyDescriptionStyled, PStyled } from "./style";

export const MyDescription: React.FC = () => {
  return (
    <MyDescriptionStyled>
      <RightAvatar
        url="https://www.github.com/jeanknieling.png"
        alt="Foto de perfil"
        size="300px"
        color="#f05600"
      />
      <GifStyled src={LoopGif} alt="Flowers in Chania" />
      <div>
        <p>
          <EmogiSpan>Olá 🤓👍,</EmogiSpan> Sou desenvolvedor
        </p>
        <h2>
          WEB <span>FULL STACK JR,</span>
        </h2>
      </div>

      <div>
        <p>Me chamo :</p>
        <h1>
          <span>JEAN KNIELING DOS SANTOS,</span>
        </h1>
        <p>
          sou casado <EmogiSpan>👩‍❤️‍👨</EmogiSpan> e tenho 3 filhos{" "}
          <EmogiSpan>👨‍👩‍👧‍👦</EmogiSpan>.
        </p>
      </div>
      <PStyled>
        Acredito no poder de transformação e evolução através da tecnologia, mas
        não apenas isso, também quero ser um exemplo de superação, esforço e
        dedicação aos meus filhos e esposa, isso me motiva a continuar minha
        jornada de estudos na área de programação que começou na Kenzie Academy
        Brasil a um ano e se depender de mim não terá data para terminar.
      </PStyled>
    </MyDescriptionStyled>
  );
};
//
