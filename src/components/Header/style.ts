import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 10rem;
  padding: 0 2.5rem;
  max-width: 100rem;
  position: relative;
  z-index: 1;
  left: -30rem;
  opacity: 0;
  @keyframes leftAnimation {
    form {
      left: -30rem;
    }
    to {
      left: 0;
      opacity: 1;
    }
  }
  animation: leftAnimation 1.5s ease-in-out forwards;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    section {
      display: flex;
      align-items: center;
      gap: 1rem;

      h2 {
        font-size: 1.5rem;
        color: var(--white);
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
          font-size: 1.8rem;
          display: block;
          margin-right: 1.5rem;
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
  height: 10rem;
  position: fixed;
  margin: 0 auto;
  display: flex;
  z-index: 1;
  justify-content: center;
`;
