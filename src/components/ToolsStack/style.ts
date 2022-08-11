import styled from "styled-components";

export const ToolsStackStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  background-color: white;
  max-width: 700px;

  h3 {
    line-height: 40px;
    text-align: center;
    padding-top: 25px;
    font-size: 25px;
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
    padding: 0 25px 25px 25px;

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
