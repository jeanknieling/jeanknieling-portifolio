import styled from "styled-components";

interface Props {
  technologiesAnimation: string;
}

export const IconsStackStyled = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  background-color: white;
  max-width: 900px;
  min-width: 300px;
  position: relative;
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
  animation: ${({ technologiesAnimation }) => technologiesAnimation};
  transition: 1s;

  h3 {
    line-height: 40px;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    max-width: 400px;
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

        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 90px;
          height: 90px;
          gap: 5px;

          SVG {
            font-size: 50px;
          }

          h4 {
            display: flex;
            opacity: 0;
            font-size: 15px;
          }

          :hover {
            color: #0055ff;

            SVG {
              font-size: 70px;
              transition: 0.5s;
            }

            h4 {
              opacity: 1;
              text-align: center;
              transition: 0.5s;
              font-weight: bold;
            }
          }
        }

        p {
          display: flex;
          justify-content: center;
          font-size: 25px;
          font-weight: bold;
          width: 170px;
          margin-top: 25px;

          :hover {
            font-size: 30px;
            color: #0055ff;
            transition: 0.4s;
          }
        }
      }
    }
  }
`;
