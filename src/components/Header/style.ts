import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 100vw;
  min-height: 50px;
  position: fixed;
  background-color: #333;
  padding: 20px;
  gap: 15px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;

    section {
      h2 {
        font-size: 15px;
      }
      display: flex;
      align-items: center;
      gap: 15px;
    }
  }

  nav {
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;
