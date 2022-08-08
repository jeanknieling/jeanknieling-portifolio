import { RightAvatarStyled } from "./style";

interface IRightAvatarProps {
  url: string;
  alt: string;
  size: string;
  color: string;
}

export const RightAvatar: React.FC<IRightAvatarProps> = ({ url, alt, ...rest }) => {
  return <RightAvatarStyled src={url} alt={alt} {...rest}/>;
};
