import { BlockerDivStyled } from "./style";

interface IBlockerDivProps {
  id: string;
}

export const BlockerDiv: React.FC<IBlockerDivProps> = ({ id }) => {
  return <BlockerDivStyled id={id} />;
};
