import { CVButtonStyled } from "./style";

interface ICVButtonProps {
  color: string;
  padding: string;
  text: string;
  link: string;
}

export const CVButton: React.FC<ICVButtonProps> = ({ text, link, ...rest }) => {
  return (
    <CVButtonStyled {...rest}>
      <a href={link}>{text}</a>
    </CVButtonStyled>
  );
};
