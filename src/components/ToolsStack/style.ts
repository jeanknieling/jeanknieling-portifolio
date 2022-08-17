import styled from "styled-components";

interface Props {
  scrollY: number;
}

export const ToolsStackStyled = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  background-color: white;
  max-width: 700px;
  min-width: 300px;
  position: relative;
  left: -300px;
  opacity: 0;
  @keyframes leftAnimation {
    form {
      left: -100px;
    }
    to {
      left: 0px;
      opacity: 1;
    }
  }
   animation: ${({ scrollY }) =>
    scrollY >= 1000 && "leftAnimation 1.2s ease-in-out forwards"};
  transition: 1s;

  h3 {
    line-height: 40px;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    max-width: 400px;
    color: black;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;

    li {
      a {
        p {
          font-size: 25px;
          font-weight: bold;
        }
        SVG {
          font-size: 45px;
        }
      }
    }
  }
`;
