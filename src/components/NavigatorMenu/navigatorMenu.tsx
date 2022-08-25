import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import {
  FaClipboardList,
  FaLaptopCode,
  FaMailBulk,
  FaRegUser,
} from "react-icons/fa";
import { useHeaderContext, useScrollContext } from "../../providers";
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
  { title: "Sobre", Icon: FaRegUser, id: "#myDescriptionSection" },
  { title: "Tecnologias", Icon: FaLaptopCode, id: "#technologiesSection" },
  { title: "Portfolio", Icon: FaClipboardList, id: "#projectsSection" },
  { title: "Contato", Icon: FaMailBulk, id: "#contactSection" },
];

export const NavigatorMenu: React.FC<INavigatorMenuProps> = ({ ...rest }) => {
  const { handleClickHamburguerMenu } = useHeaderContext();
  const { divTechnologiesTop, divProjectsTop, divContactTop, scrollYState } = useScrollContext();
  const [atualSection, setAtualSection] = useState("Sobre");

  useEffect(() => {
    if (window.innerHeight - 350) {
      setAtualSection("Sobre");
    } 
    if(divTechnologiesTop < window.innerHeight - 350){
      setAtualSection("Tecnologias");
    } 
    if(divProjectsTop < window.innerHeight - 500){
      setAtualSection("Portfolio");
    } 
    if(divContactTop < window.innerHeight - 500) {
      setAtualSection("Contato");
    }
  }, [scrollYState]);

  return (
    <NavigatorMenuStyled
      atualSection={atualSection}
      {...rest}
    >
      <ul>
        {menu.map((item) => {
          const { id, title, Icon } = item;

          return (
            <li  key={id}>
              <a
                className={title.toLowerCase()}
                href={id}
                onClick={() => {
                  handleClickHamburguerMenu();
                  document.getElementById("checkbox-menu")?.click();
                }}
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
