import styled from "styled-components";

interface Props {
  projectsAnimation: string;
}

export const MyProjectsStyled = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  width: 100%;
  padding: 2.5rem 0.5rem;
  position: relative;
  left: -30rem;
  opacity: 0;
  @keyframes leftAnimation {
    form {
      left: -30rem;
    }
    to {
      left: 0;
      opacity: 1;
    }
  }
  animation: ${({ projectsAnimation }) => projectsAnimation};
  transition: 0.2s;

  h3 {
    text-align: center;
    font-size: 3.2rem;
    font-weight: bold;

    span {
      color: var(--black-0);
      font-size: 1.8rem;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    max-width: 120rem;
  }

  @media (min-width: 600px) {
    section {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;

export const ContainerStyled = styled.div`
  background: var(--blue-1);
`;

export const LinkStyled = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  border: 0.3rem solid transparent;
  cursor: pointer;
  width: 100%;
  max-width: 34.6rem;
  height: 6rem;
  font-weight: bold;
  font-size: 2rem;
  -webkit-box-shadow: 0.3rem 0.3rem 0.3rem 0.2rem var(--black-0);
  box-shadow: 0.3rem 0.3rem 0.3rem 0.2rem var(--black-0);
  border: 0.5rem solid transparent;
  background-color: var(--white);
  transition: 0.2s;
  color: var(--black-2);
  margin: 1.5rem;

  :hover {
    background-color: var(--black-2);
    color: var(--white);
    transition: 0.2s;
    font-size: 2.2rem;
    height: 6rem;
  }
`;
