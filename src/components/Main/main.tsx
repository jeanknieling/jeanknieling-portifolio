import { ReactNode } from "react";
import { MainStyled } from "./style";

interface IAvatarProps {
  children: ReactNode;
}

export const Main: React.FC<IAvatarProps> = ({ children }) => {
  return <MainStyled>{children}</MainStyled>;
};
