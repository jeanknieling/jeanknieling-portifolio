import styled from "styled-components";

interface Props {
  isOpen: boolean;
}

export const NavigatorMenuStyled = styled.nav<Props>`
  position: absolute;
  top: ${(props) => (props.isOpen ? "118px" : "-600px")};
  left: 0px;
  transition: 1s;
  z-index: -1;
  width: 100%;
  padding: 15px;
  background-color: #333;

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
