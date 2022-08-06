import { DivContainerStyled, Input, Label } from "./styled";


export const HamburgerMenu = () => {
  return (
    <DivContainerStyled>
      <Input type="checkbox" id="checkbox-menu"/>

      <Label htmlFor="checkbox-menu">
        <span></span>
        <span></span>
        <span></span>
      </Label>
    </DivContainerStyled>
  );
};
