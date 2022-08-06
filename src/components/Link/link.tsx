import { ReactNode } from "react";
import { LinkStyled } from "./style";

interface ILinkProps {
  children: ReactNode;
}

export const Link: React.FC<ILinkProps> = ({ children }) => {
  return <LinkStyled>{children}</LinkStyled>;
};
