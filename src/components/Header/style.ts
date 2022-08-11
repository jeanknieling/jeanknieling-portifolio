import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  min-height: 100px;
  background-color: #333;
  position: fixed;
  padding: 0 25px;
  z-index: 1;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index: 2;

    section {
      display: flex;
      align-items: center;
      gap: 10px;

      h2 {
        font-size: 20px;
        width: 160px;
      }
    }
  }

  @media (min-width: 700px) {
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
    justify-content: space-between;
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
