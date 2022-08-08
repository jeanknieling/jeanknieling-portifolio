import { ReactNode } from "react";
import { ContainerStyled } from "./style";

interface IContainerProps {
  children: ReactNode;
}

export const Container: React.FC<IContainerProps> = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};
