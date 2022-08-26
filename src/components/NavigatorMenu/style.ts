import styled from "styled-components";

interface Props {
  isOpen: boolean;
  atualSection: string;
}

export const NavigatorMenuStyled = styled.nav<Props>`
  position: absolute;
  right: ${(props) => (props.isOpen ? "0" : "-1000px")};
  top: 9.9rem;
  transition: 0.5s;
  padding: 1.5rem;
  width: 100%;
  z-index: -1;
  background: var(--blue-1); /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    var(--blue-3),
    var(--blue-1)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, var(--blue-3), var(--blue-1));

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      a {
        cursor: pointer;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        font-weight: bold;
        padding: 1rem 2rem;
        white-space: nowrap;
        height: 4.5rem;
        gap: 1rem;
        background-color: var(--white);
        color: var(--blue-2);
        border: 0.3rem solid transparent;
        border-radius: 5px;
        -webkit-box-shadow: 0.3rem 0.3rem 0.5rem 0.1rem rgba(0, 0, 0, 0.2);
        box-shadow: 0.3rem 0.3rem 0.5rem 0.1rem rgba(0, 0, 0, 0.2);
        transition: 0.3s;

        :hover {
          border-color: var(--white);
          background-color: var(--blue-2);
          color: var(--white);
          transition: 0.3s;

          SVG {
            color: var(--white);
            transition: 0.3s;
          }
        }

        SVG {
          color: var(--blue-2);
        }
      }
    }
  }
  .sobre {
    background-color: ${({ atualSection }) =>
      atualSection === "Sobre" ? "var(--blue-2)" : "var(--white)"};
    border-color: var(--white);
    color: ${({ atualSection }) =>
      atualSection === "Sobre" ? "var(--white)" : "var(--blue-2)"};

    SVG {
      color: ${({ atualSection }) =>
        atualSection === "Sobre" ? "var(--white)" : "var(--blue-2)"};
    }
  }

  .tecnologias {
    background-color: ${({ atualSection }) =>
      atualSection === "Tecnologias" ? "var(--blue-2)" : "var(--white)"};
    border-color: var(--white);
    color: ${({ atualSection }) =>
      atualSection === "Tecnologias" ? "var(--white)" : "var(--blue-2)"};

    SVG {
      color: ${({ atualSection }) =>
        atualSection === "Tecnologias" ? "var(--white)" : "var(--blue-2)"};
    }
  }

  .portfolio {
    background-color: ${({ atualSection }) =>
      atualSection === "Portfolio" ? "var(--blue-2)" : "var(--white)"};
    border-color: var(--white);
    color: ${({ atualSection }) =>
      atualSection === "Portfolio" ? "var(--white)" : "var(--blue-2)"};

    SVG {
      color: ${({ atualSection }) =>
        atualSection === "Portfolio" ? "var(--white)" : "var(--blue-2)"};
    }
  }

  .contato {
    background-color: ${({ atualSection }) =>
      atualSection === "Contato" ? "var(--blue-2)" : "var(--white)"};
    border-color: var(--white);
    color: ${({ atualSection }) =>
      atualSection === "Contato" ? "var(--white)" : "var(--blue-2)"};

    SVG {
      color: ${({ atualSection }) =>
        atualSection === "Contato" ? "var(--white)" : "var(--blue-2)"};
    }
  }

  @media (min-width: 750px) {
    position: static;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    background: transparent;

    ul {
      flex-direction: row;
      justify-content: space-between;
      width: 100%;

      li {
        a {
          justify-content: center;
          width: 15.8rem
        }
      }
    }
  }

  @media (min-width: 900px) {
    justify-content: flex-end;
    width: 100%;
    max-width: 70rem;
  }
`;
