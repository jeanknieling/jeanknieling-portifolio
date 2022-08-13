import styled from "styled-components";

export const ToolsStackStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  background-color: white;
  max-width: 700px;
  position: relative;
  right: -1100px;
  opacity: 0;
  @keyframes rightAnimation {
    form {
      right: -1100px;
    }
    to {
      right: 0px;
      opacity: 1;
    }
  }
  animation: rightAnimation 2s forwards;
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
