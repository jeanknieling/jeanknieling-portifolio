import styled from "styled-components";

export const ButtonLeadsToTopStyled = styled.button`
  background-color: rgba(0,0,0,0.5);
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 62px;
  right: 15px;
  transition: 5s;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  transition: 0s;

  SVG {
    font-size: 25px;
    color: #f2f2f2;
  }

  @media (min-width: 1200px) {
    right: 10%;
  }
`;
