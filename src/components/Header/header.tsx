import { useHeaderContext } from "../../providers/HeaderContext";
import MyPhoto from "./../../assets/photo.jpg";
import { Avatar, HamburgerMenu, NavigatorMenu } from "./../../components";
import { HeaderStyled } from "./style";

export const Header = () => {
  const { isDrawerOpen } = useHeaderContext();

  return (
    <HeaderStyled>
      <div>
        <section>
          <Avatar
            url={MyPhoto}
            alt="Foto de perfil"
            size="70px"
            color="#f05600"
          />
          <h2>JEAN KNIELING</h2>
        </section>

        <HamburgerMenu />
      </div>

      <NavigatorMenu isOpen={isDrawerOpen} />
    </HeaderStyled>
  );
};
