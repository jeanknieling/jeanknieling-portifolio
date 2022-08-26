import styled from "styled-components";

export const ButtonLeadsToTopStyled = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  width: 5rem;
  height: 5rem;
  position: fixed;
  bottom: 6.2rem;
  right: 1.5rem;
  transition: 5s;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  transition: 0s;

  SVG {
    font-size: 2.5rem;
    color: var(--white);
  }

  @media (min-width: 1200px) {
    right: 10%;
  }
`;
