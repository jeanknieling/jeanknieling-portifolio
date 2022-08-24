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
  background-color: #dfdfdf;
  border: 5px solid #0055ff;
  border-radius: 10px;
  max-width: 950px;
  min-width: 310px;
  width: 100%;
  position: relative;
  padding: 20px 20px 15px;
  -webkit-box-shadow: 8px 8px 5px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 8px 8px 5px 1px rgba(0, 0, 0, 0.2);
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
            transition: 0.3s;

          }

          h4 {
            display: flex;
            opacity: 0;
            font-size: 15px;
          }

          :hover {
            color: #0055ff;

            SVG {
              font-size: 65px;
              transition: 0.3s;
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
          margin-top: 22px;

          :hover {
            font-size: 30px;
            color: #0055ff;
            transition: 0.3s;
          }
        }
      }
    }
  }
`;
