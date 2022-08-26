import styled from "styled-components";

interface Props {
  padding: string;
  color: string;
}

export const CVButtonStyled = styled.a<Props>`
  border-radius: 0.5rem;
  border: 0.3rem solid transparent;
  background-color: ${({ color }) => color && color};
  padding: ${({ padding }) => padding && padding};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.5s;
  white-space: nowrap;

  button {
    background: transparent;
    color: var(--blue-2);
    font-weight: bold;
  }

  :hover {
    background-color: var(--blue-2);
    border-color: var(--white);
    transition: 0.5s;
    color: var(--white);

    button {
      color: var(--white);
    }
  }

  @media (min-width: 600px) {
    width: 18rem;
  }
`;
