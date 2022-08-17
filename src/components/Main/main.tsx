import { ReactNode } from "react";
import { MainStyled } from "./style";

interface IAvatarProps {
  onWheel: () => void;
  children: ReactNode;
}

export const Main: React.FC<IAvatarProps> = ({
  onWheel,
  children,
}) => {
  return <MainStyled onWheel={onWheel}>{children}</MainStyled>;
};
