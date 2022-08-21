import styled from "styled-components";

interface Props {
  projectsAnimation: string;
}

export const MyProjectsStyled = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 25px;
  width: 100%;
  padding: 50px;
  position: relative;
  left: -300px;
  opacity: 0;
  @keyframes leftAnimation {
    form {
      left: -300px;
    }
    to {
      left: 0px;
      opacity: 1;
    }
  }
  animation: ${({ projectsAnimation }) => projectsAnimation};
  transition: 0.2s;

  h3 {
    font-size: 32px;
    font-weight: bold;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    max-width: 1000px;
  }

  @media (min-width: 600px) {
    section {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;

export const ContainerStyled = styled.div`
  background-color: #0055ff;
`;
