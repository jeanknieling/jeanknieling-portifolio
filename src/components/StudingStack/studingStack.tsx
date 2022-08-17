import { IconType } from "react-icons";
import {
  FaAws
} from "react-icons/fa";
import {
  SiMongodb, SiMaterialui
} from "react-icons/si";
import { useScrollContext } from "../../providers";
import { StudingStackStyled } from "../StudingStack/style";

interface IStudingStack {
  name: string;
  Icon: IconType | string;
}

const menu: Array<IStudingStack> = [
  { name: "AWS", Icon: FaAws },
  { name: "AWS", Icon: SiMongodb },
  { name: "Material UI", Icon: SiMaterialui },
];

export const StudingStack = () => {
  const { scrollY } = useScrollContext();

  return (
    <StudingStackStyled scrollY={scrollY}>
      <h3>ESTUDANDO</h3>
      <ul>
        {menu.map((item, index) => {
          const { Icon, name } = item;
          return (
            <li key={index}>
              <a href="" target="_blank">
                {typeof Icon !== "string" ? <Icon  /> : <p>{Icon}</p>}
              </a>
            </li>
          );
        })}
      </ul>
    </StudingStackStyled>
  );
};
