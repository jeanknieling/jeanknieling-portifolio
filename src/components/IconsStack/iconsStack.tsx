import { IconType } from "react-icons";
import { IconsStackStyled } from "./style";

interface IIconsStackProps {
  identifier: string;
  title: string;
  animation: string;
  iconsData: {
    name: string;
    Icon: IconType | string;
  }[];
}
export const IconsStack = ({ iconsData, animation, title, identifier }: IIconsStackProps) => {
  return (
    <IconsStackStyled id={identifier} technologiesAnimation={animation}>
      <h3>{title}</h3>
      <ul>
        {iconsData.map((item: any, index: any) => {
          const { Icon, name } = item;

          return (
            <li key={index}>
              <a href="" target="_blank">
                {typeof Icon !== "string" ? (
                  <div>
                    <Icon />
                    <h4>{name}</h4>
                  </div>
                ) : (
                  <p>{Icon}</p>
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </IconsStackStyled>
  );
};
