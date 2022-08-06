import { AvatarStyled } from "./style";

interface IAvatarProps {
  url: string;
  alt: string;
}

export const Avatar: React.FC<IAvatarProps> = ({ url, alt }) => {
  return <AvatarStyled src={url} alt={alt}/>;
};
