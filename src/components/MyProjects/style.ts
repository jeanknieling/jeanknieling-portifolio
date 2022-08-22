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
  gap: 50px;
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

export const LinkStyled = styled.a`
  display: flex;
  justify-content: center;
  background-color: #f2f2f2;
  border-radius: 5px;
  cursor: pointer;
  width: 310px;
  color: #333;
  font-size: 25px;
  padding: 15px 20px;
  -webkit-box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.3);
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.3);

  :hover {
    color: #f2f2f2;
    background-color: #333;
    transition: 0.3s;
    -webkit-box-shadow: 3px 3px 3px 1px rgba(255, 255, 255, 0.8);
    box-shadow: 3px 3px 3px 1px rgba(255, 255, 255, 0.8);
  }
`;
