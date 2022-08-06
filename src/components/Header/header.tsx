import { ReactNode } from "react";
import { Link, HamburgerMenu } from "./../../components";
import { HeaderStyled } from "./style";

interface IHeaderProps {
  children: ReactNode[];
}

export const Header: React.FC<IHeaderProps> = ({ children }) => {
  return (
    <HeaderStyled>
      <div>
        <section>
          {children[0]}
          {children[1]}
        </section>

        <HamburgerMenu/>
      </div>
      

      <nav>
        <ul>
          {children.map((item, index) =>
            index !== 0 && index !== 1 ? (
              <Link key={index}>{item}</Link>
            ) : undefined
          )}
        </ul>
      </nav>
    </HeaderStyled>
  );
};
