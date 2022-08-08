import styled from "styled-components";

interface Props {
  isOpen: boolean;
}

export const NavigatorMenuStyled = styled.nav<Props>`
  position: absolute;
  top: ${(props) => (props.isOpen ? "100px" : "-500px")};
  left: 0px;
  transition: 1s;
  padding: 15px;
  background-color: #333;
  width: 100%;
  z-index: -1;

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    

    li {
      display: flex;
      background-color: #aaa;
      padding: 0 10px;
      border-radius: 5px;
    }
  }

  @media (min-width: 700px) {
    position: static;
    z-index: 1;
    padding: 0;
    display: flex;
    justify-content: center;
    width: 100%;

    ul {
      flex-direction: row;
      justify-content: center;
    }
  }

  @media (min-width: 900px) {
    justify-content: flex-end;
  }
`;
