import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100px;
  padding: 0 25px;
  max-width: 1000px;
  position: relative;
  z-index: 1;
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
  animation: leftAnimation 1.2s ease-in-out forwards;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    section {
      display: flex;
      align-items: center;
      gap: 10px;

      h2 {
        font-size: 14px;
        color: #f2f2f2;
        font-weight: 600;
      }
    }
  }

  @media (min-width: 750px) {
    div {
      section {
        h2 {
          display: none;
          white-space: nowrap;
          font-size: 18px;
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
          margin-right: 15px;
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
  z-index: 1;
  justify-content: center;
`;
