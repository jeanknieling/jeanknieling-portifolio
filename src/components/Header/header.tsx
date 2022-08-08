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
            size="70px"
            color="#f05600"
          />
          <h2>Jean Knieling</h2>
        </section>

        <HamburgerMenu />
      </div>

      <NavigatorMenu isOpen={isDrawerOpen} />
    </HeaderStyled>
  );
};
