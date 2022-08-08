import { AvatarStyled } from "./style";

interface IAvatarProps {
  url: string;
  alt: string;
  size: string;
  color: string;
}

export const Avatar: React.FC<IAvatarProps> = ({ url, alt, ...rest }) => {
  return <AvatarStyled src={url} alt={alt} {...rest}/>;
};
