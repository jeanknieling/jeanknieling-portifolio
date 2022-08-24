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

const handleClick = (section: Element | null) => {
  const previousDiv = document.querySelector("#myDescriptionSection")?.getBoundingClientRect().top;
  const previousDiv2 = document.querySelector("#technologiesSection")?.getBoundingClientRect().top;
  const previousDiv3 = document.querySelector("#projectsSection")?.getBoundingClientRect().top;

  if (section?.id === "myDescriptionSection") {
    scrollTo(100, section?.getBoundingClientRect().top - 100);
  } else if (section?.id === "technologiesSection") {
    previousDiv && previousDiv2 && scrollTo(0, window.innerHeight - ((previousDiv-previousDiv2)+935));
  } else if (section?.id === "projectsSection") {
    previousDiv && previousDiv3 && scrollTo(0, window.innerHeight - ((previousDiv-previousDiv3)+935));
  } else if (section?.id === "contactSection") {
    previousDiv && previousDiv3 && scrollTo(0, window.innerHeight - ((previousDiv-previousDiv3)));
  }
};

export const NavigatorMenu: React.FC<INavigatorMenuProps> = ({ ...rest }) => {
  return (
    <NavigatorMenuStyled {...rest}>
      <ul>
        {menu.map((item, index) => {
          const { id, title, Icon } = item;
          return (
            <li key={index}>
              <a
                key={index}
                onClick={() => handleClick(document.querySelector(`${id}`))}
              >
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
