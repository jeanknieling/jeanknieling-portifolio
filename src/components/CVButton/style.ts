import styled from "styled-components";

interface Props {
  padding: string;
  color: string;
}

export const CVButtonStyled = styled.button<Props>`
  border-radius: 5px;
  background-color: ${({ color }) => color && color};
  padding: ${({ padding }) => padding && padding};

  @media (min-width: 500px) {
    width: 200px;
  }
`;
