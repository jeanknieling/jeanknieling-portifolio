import { IconType } from "react-icons";
import {
  FaClipboardList,
  FaLaptopCode,
  FaMailBulk,
  FaRegUser,
} from "react-icons/fa";
import { NavigatorMenuStyled } from "./style";

interface INavigatorMenuProps {
  isOpen: boolean;
}

interface IMenu {
  id: string;
  title: string;
  Icon: IconType;
}

const menu: Array<IMenu> = [
  { title: "Sobre mim", Icon: FaRegUser, id: "#myDescriptionSection" },
  { title: "Tecnologias", Icon: FaLaptopCode, id: "#technologiesSection" },
  { title: "Portfólio", Icon: FaClipboardList, id: "#projectsSection" },
  { title: "Contato", Icon: FaMailBulk, id: "#contactSection" },
];

export const NavigatorMenu: React.FC<INavigatorMenuProps> = ({ ...rest }) => {
  return (
    <NavigatorMenuStyled {...rest}>
      <ul>
        {menu.map((item, index) => {
          const { id, title, Icon } = item;
          return (
            <li key={index}>
              <a key={index} href={id}>
                <span>
                  <Icon size={20} />
                </span>
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </NavigatorMenuStyled>
  );
};
