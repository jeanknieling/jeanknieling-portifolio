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
    color: #052266;
    font-weight: bold;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.2);
  }

  :hover {
    background-color: #052266;
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
