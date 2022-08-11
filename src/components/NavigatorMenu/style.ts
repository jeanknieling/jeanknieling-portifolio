import styled from "styled-components";

interface Props {
  isOpen: boolean;
}

export const NavigatorMenuStyled = styled.nav<Props>`
  position: absolute;
  right: ${(props) => (props.isOpen ? "0" : "-700px")};
  top: 99px;
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
    padding: 0;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    
    ul {
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }
  }

  @media (min-width: 900px) {
    justify-content: flex-end;
  }
`;