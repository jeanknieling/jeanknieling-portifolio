import { IconType } from "react-icons";
import { FaClipboardList, FaHome, FaLaptopCode, FaMailBulk, FaRegUser } from "react-icons/fa";
import { Link } from "./../../components";
import { NavigatorMenuStyled } from "./style";

interface INavigatorMenuProps {
  isOpen: boolean;
}

interface IMenu {
  title: string;
  Icon: IconType;
}

const menu: Array<IMenu> = [
  { title: "Home", Icon: FaHome },
  { title: "Sobre", Icon: FaRegUser },
  { title: "Tecnologias", Icon: FaLaptopCode },
  { title: "Portifólio", Icon: FaClipboardList },
  { title: "Contato", Icon: FaMailBulk },
];

export const NavigatorMenu: React.FC<INavigatorMenuProps> = ({ ...rest }) => {
  return (
    <NavigatorMenuStyled {...rest}>
      <ul>
        {menu.map((item, index) => {
          const { title, Icon } = item;
          return (
            <li key={index}>
              <Link ><Icon size={25}/>{title}</Link>
            </li>
          );
        })}
      </ul>
    </NavigatorMenuStyled>
  );
};
