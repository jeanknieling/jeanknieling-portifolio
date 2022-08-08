import { useHeaderContext } from "../../providers/HeaderContext";
import { DivContainerStyled, Input, Label } from "./styled";

export const HamburgerMenu = () => {
  const { handleClickHamburguerMenu } = useHeaderContext();

  return (
    <DivContainerStyled>
      <Input type="checkbox" id="checkbox-menu" />
      <Label htmlFor="checkbox-menu" onClick={handleClickHamburguerMenu}>
        <span></span>
        <span></span>
        <span></span>
      </Label>
    </DivContainerStyled>
  );
};
