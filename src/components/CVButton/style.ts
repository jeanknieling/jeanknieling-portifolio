import styled from "styled-components";

interface Props {
  padding: string;
  color: string;
}

export const CVButtonStyled = styled.a<Props>`
  border-radius: 5px;
  background-color: ${({ color }) => color && color};
  padding: ${({ padding }) => padding && padding};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.5s;

  button {
    background: transparent;
    color: #0444AA;
    font-weight: bold;
  }

  :hover {
    background-color: #0444AA;
    transition: 0.5s;
    color: #f2f2f2;

    button {
      color: #f2f2f2;
    }
  }


  @media (min-width: 600px) {
    width: 180px;
  }
`;
