import { FaAngleUp } from "react-icons/fa";
import { ButtonLeadsToTopStyled } from "./style";

export const ButtonLeadsToTop = () => {
  return (
    <ButtonLeadsToTopStyled onClick={() => scrollTo(0,0)}>
      <FaAngleUp />
    </ButtonLeadsToTopStyled>
  );
};
