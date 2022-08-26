import styled from "styled-components";

interface Props {
  technologiesAnimation: string;
}

export const IconsStackStyled = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  background-color: #dfdfdf;
  border: 0.5rem solid var(--blue-0);
  border-radius: 10px;
  max-width: 95rem;
  min-width: 31rem;
  width: 100%;
  position: relative;
  padding: 2rem 2rem 1.5rem;
  -webkit-box-shadow: 0.8rem 0.8rem 0.5rem 0.1rem var(--black-0);
  box-shadow: 0.8rem 0.8rem 0.5rem 0.1rem var(--black-0);
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
  animation: ${({ technologiesAnimation }) => technologiesAnimation};

  h3 {
    line-height: 4rem;
    text-align: center;
    font-size: 3.2rem;
    font-weight: bold;
    max-width: 40rem;
    color: black;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    li {
      a {
        color: black;
        cursor: pointer;

        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 10rem;
          height: 10rem;
          gap: 0.5rem;

          SVG {
            font-size: 5rem;
            transition: 0.3s;
          }

          h4 {
            display: flex;
            opacity: 0;
            font-size: 1.5rem;
          }

          :hover {
            color: var(--blue-0);

            SVG {
              font-size: 7.5rem;
              transition: 0.3s;
            }

            h4 {
              opacity: 1;
              text-align: center;
              font-weight: bold;
            }
          }
        }

        p {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2.5rem;
          font-weight: bold;
          width: 17rem;
          height: 5rem;
          transition: 0.3s;

          :hover {
            font-size: 3rem;
            color: var(--blue-0);
            transition: 0.2s;
          }
        }
      }
    }
  }

  @media (min-width: 370px) {
    p {
      margin-top: 1.5rem;
    }
  }
`;
