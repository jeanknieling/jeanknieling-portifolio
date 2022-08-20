import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100px;
  min-height: 100px;
  position: fixed;
  padding: 0 25px;
  z-index: 1;
  max-width: 1200px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    section {
      display: flex;
      align-items: center;
      gap: 10px;

      h2 {
        font-size: 18px;
        color: #f2f2f2;
        font-weight: 600;
      }
    }
  }

  @media (min-width: 700px) {
    div {
      section {
        h2 {
          display: none;
          white-space: nowrap;
        }
      }
    }
  }

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    div {
      section {
        h2 {
          display: block;
          margin-right: 50px;
        }
      }
    }
  }
`;

export const ContainerStyled = styled.div`
  background: #0575e6;
  background: -webkit-linear-gradient(to left, #021b79, #0575e6);
  background: linear-gradient(to left, #021b79, #0575e6);
  width: 100%;
  height: 100px;
  position: fixed;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
