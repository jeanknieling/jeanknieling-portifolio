import { IconType } from "react-icons";
import {
  DiScrum
} from "react-icons/di";
import {
  BsKanban
} from "react-icons/bs";
import { AgileMethodologiesStackStyled } from "../AgileMethodologiesStack/style";

interface  AgileMethodologiesStack {
  name: string;
  Icon: IconType | string;
}

const menu: Array< AgileMethodologiesStack> = [
  { name: "Scrum", Icon: DiScrum },
  { name: "Kanbam", Icon: BsKanban }
];

export const AgileMethodologiesStack  = () => {
  return (
    <AgileMethodologiesStackStyled >
      <h3>METODOLOGIAS ÁGEIS</h3>
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
    </AgileMethodologiesStackStyled>
  );
};
