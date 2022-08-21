import styled from "styled-components";

export const ProjectCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid #f2f2f2;
  background-color: #eee;
  border-radius: 5px;
  gap: 5px;
  width: 320px;
  color: #333;
  -webkit-box-shadow: 5px 4px 5px 3px rgba(0, 0, 0, 0.3);
  box-shadow: 5px 4px 5px 3px rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    object-position: top;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;

    h3 {
      font-size: 25px;
      font-weight: bold;
    }

    p:nth-child(3) {
      font-size: 15px;
      font-style: italic;
      span {
        font-weight: bold;
      }
    }
  }

  div:nth-child(3) {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 10px;

    a {
      background-color: #c2c2c2;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
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
`;
