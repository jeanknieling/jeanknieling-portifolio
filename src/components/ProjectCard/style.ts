import styled from "styled-components";

export const ProjectCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 0.2rem solid var(--white);
  background-color: var(--white);
  border-radius: 0.5rem;
  font-size: 1.5rem;
  max-width: 35rem;
  height: 50rem;
  color: var(--gray);
  -webkit-box-shadow: 0.5rem 0.4rem 0.5rem 0.3rem var(--black-0);
  box-shadow: 0.5rem 0.4rem 0.5rem 0.3rem var(--black-0);
  line-height: 2rem;

  img {
    width: 100%;
    height: 18rem;
    object-fit: center;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  section {
    width: 100%;
    height: 30rem;
    margin-bottom: 0.5rem;

    div:nth-child(1) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1.5rem;
      padding: 1rem;
      min-height: 21rem;

      h3 {
        text-align: left;
        font-size: 2.5rem;
        font-weight: bold;
        line-height: 2.5rem;
      }

      p:nth-child(3) {
        font-style: italic;
        height: 8rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        span {
          font-weight: bold;
        }
      }
    }

    div:nth-child(2) {
      display: flex;
      justify-content: space-around;
      gap: 0.5rem;
      padding: 0 0.5rem 0.5rem;
      width: 100%;

      a {
        background-color: #c2c2c2;
        border-radius: 0.5rem;
        display: flex;
        justify-content: center;
        gap: 1rem;
        width: 100%;
        padding: 1rem;
        color: #333;
        transition: 0.3s;

        svg {
          font-size: 2rem;
        }

        :hover {
          background-color: #333;
          color: var(--white);
          transition: 0.3s;
        }
      }
    }
  }
`;
