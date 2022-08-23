import styled from "styled-components";

interface Props {
  projectsAnimation: string;
}

export const MyProjectsStyled = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    gap: 25px;
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
  background: #0575e6;
`;

export const LinkStyled = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 3px solid transparent;
  cursor: pointer;
  width: 300px;
  height: 60px;
  font-weight: bold;
  font-size: 20px;
  -webkit-box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.3);
  border: 5px solid transparent;
  background-color: #aaa;
  transition: 0.2s;
  color: #333;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
  margin: 15px;

  :hover {
    background-color: #f2f2f2;
    transition: 0.2s;
    font-size: 22px;
    width: 320px;
    height: 60px;
  }
`;
