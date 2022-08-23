import { ReactNode } from "react";
import { useScrollContext } from "../../providers";
import { MainStyled } from "./style";

interface IAvatarProps {
  children: ReactNode;
}

export const Main: React.FC<IAvatarProps> = ({ children }) => {

  return <MainStyled >{children}</MainStyled>;
};
