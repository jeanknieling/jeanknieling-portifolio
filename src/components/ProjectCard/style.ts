import styled from "styled-components";

export const ProjectCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid #f2f2f2;
  background-color: #eee;
  border-radius: 5px;
  font-size: 15px;
  max-width: 350px;
  height: 500px;
  color: #333;
  -webkit-box-shadow: 5px 4px 5px 3px rgba(0, 0, 0, 0.3);
  box-shadow: 5px 4px 5px 3px rgba(0, 0, 0, 0.3);
  line-height: 20px;

  img {
    width: 100%;
    height: 180px;
    object-fit: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  section {
    width: 100%;
    height: 300px;
    margin-bottom: 5px;

    div:nth-child(1) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 15px;
      padding: 10px;
      min-height: 210px;

      h3 {
        text-align: left;
        font-size: 25px;
        font-weight: bold;
        line-height: 25px;
      }

      p:nth-child(3) {
        font-style: italic;
        height: 80px;
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
      gap: 5px;
      padding: 0 5px 5px;
      width: 100%;

      a {
        background-color: #c2c2c2;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        gap: 10px;
        width: 100%;
        padding: 10px;
        color: #333;
        transition: 0.3s;

        svg {
          font-size: 20px;
        }

        :hover {
          background-color: #333;
          color: #f2f2f2;
          transition: 0.3s;
        }
      }
    }
  }
`;
