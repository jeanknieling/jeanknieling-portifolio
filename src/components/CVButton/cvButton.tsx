import { CVButtonStyled } from "./style";

interface ICVButtonProps {
  id: string
  color: string;
  padding: string;
  text: string;
  link: string;
}

export const CVButton: React.FC<ICVButtonProps> = ({ text, link, ...rest }) => {
  return (
    <CVButtonStyled href={link} target="_blank" {...rest}>
      <button>{text}</button>
    </CVButtonStyled>
  );
};
