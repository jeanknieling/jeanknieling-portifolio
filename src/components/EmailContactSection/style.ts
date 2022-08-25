import styled from "styled-components";

export const StyledEmailContactSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 25px;
  color:  rgba(0, 0, 0, 1);
  padding: 25px;
  position: relative;

  h3 {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 700px;
    width: 100%;

    label {
      display: flex;
      flex-direction: column;
      gap: 5px;
      font-weight: 600;

      textarea {
        border-radius: 10px;
        max-width: 100%;
        resize: none;
        height: 112px;
        padding: 15px;
        border: 2px solid rgba(0, 0, 0, 1);
        -webkit-box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.3);
        box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.3);
      }
    }

    input {
      border: 2px solid rgba(0, 0, 0, 1);
      border-radius: 10px;
      height: 54px;
      padding: 0 10px;
      -webkit-box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.3);
      box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.3);
    }

    input[type="submit"] {
      cursor: pointer;
      height: 60px;
      font-size: 22px;
      font-weight: bold;
      background-color: #f2f2f2;
      -webkit-box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.3);
      box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.3);

      text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
      transition: 0.2s;

      :hover {
        background-color: rgba(0, 0, 0, 1);
        color: #f2f2f2;
        transition: 0.2s;
        font-size: 25px;
      }
    }
  }
`;
