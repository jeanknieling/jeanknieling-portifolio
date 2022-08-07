import { useHeaderContext } from "../../providers/HeaderContext";
import { Avatar, HamburgerMenu, NavigatorMenu } from "./../../components";
import { HeaderStyled } from "./style";

export const Header = () => {
  const { isDrawerOpen } = useHeaderContext();

  return (
    <HeaderStyled>
      <div>
        <section>
          <Avatar
            url="https://www.github.com/jeanknieling.png"
            alt="Foto de perfil"
          />
          <h2>Jean Knieling</h2>
        </section>

        <HamburgerMenu />
      </div>

      <hr />

      <NavigatorMenu isOpen={isDrawerOpen} />
    </HeaderStyled>
  );
};
/*import { AiFillHome } from 'react-icons/ai'

const quickMenu = [
  { title: 'Users', Icon: AiFillHome },
  { title: 'Products', Icon: AiFillHome },
  { title: 'Transactions', Icon: AiFillHome },
  { title: 'Transactions', Icon: AiFillHome },
  { title: 'Transactions', Icon: AiFillHome }
]

function App() {
  return (
    <ol className="flex flex-col text-white">
      {quickMenu.map(menuItem => {
        const { title, path, Icon } = menuItem
        return (
          <li key={title}>
            <a href={path}>
              <Icon />
            </a>
          </li>
        )
      })}
    </ol>
  )
}*/
