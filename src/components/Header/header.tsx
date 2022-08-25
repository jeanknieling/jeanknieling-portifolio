import { useHeaderContext } from "../../providers/HeaderContext";
import MyPhoto from "./../../assets/avatar.jpeg";
import { Avatar, HamburgerMenu, NavigatorMenu } from "./../../components";
import { ContainerStyled, HeaderStyled } from "./style";

export const Header = () => {
  const { isDrawerOpen } = useHeaderContext();

  return (
    <ContainerStyled>
      <HeaderStyled>
        <div>
          <section>
            <Avatar
              url={MyPhoto}
              alt="Foto de perfil"
              size="70px"
              color="#F2F2F2"
            />
            <h2>{"< JEAN KNIELING />"} </h2>
          </section>

          <HamburgerMenu />
        </div>
        <NavigatorMenu isOpen={isDrawerOpen} />
      </HeaderStyled>
    </ContainerStyled>
  );
};
