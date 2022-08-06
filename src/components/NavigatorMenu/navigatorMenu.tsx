import { Link } from "./../../components";
import { NavigatorMenuStyled } from "./style";

interface INavigatorMenuProps {
  menuNames: string[] | [];
  isOpen: boolean;
}

export const NavigatorMenu: React.FC<INavigatorMenuProps> = ({
  menuNames,
  ...rest
}) => {
  return (
    <NavigatorMenuStyled {...rest}>
      <ul>
        {menuNames.map((item, index) => (
          <li key={index}>
            <Link key={index}>{item}</Link>
          </li>
        ))}
      </ul>
    </NavigatorMenuStyled>
  );
};
