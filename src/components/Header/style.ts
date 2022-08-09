import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100px;
  position: relative;
  background-color: #333;
  gap: 15px;
  padding: 15px 15px 0 15px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    section {
      display: flex;
      align-items: center;
      gap: 15px;

      h2 {
        font-size: 20px;
        width: 180px;
      }
    }
  }

  @media (min-width: 700px) {
    padding: 10px 0 0 0;
    height: 100px;

    div {
      section {
        h2 {
          display: none;
        }
      }
    }
  }

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0 25px;

    div {
      section {
        h2 {
          display: block;
        }
      }
    }
  }
`;
