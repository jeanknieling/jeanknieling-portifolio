import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  position: relative;
  background-color: #333;
  gap: 15px;
  padding: 15px 15px 0 15px ;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    section {
      h2 {
        font-size: 25px;
      }
      display: flex;
      align-items: center;
      gap: 15px;
    }
  }

  hr {
    width: 100%;
  }
`;
