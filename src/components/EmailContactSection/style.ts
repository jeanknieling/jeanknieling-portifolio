import styled from "styled-components";

interface Props {
  contactAnimation: string;
}

export const StyledEmailContactSection = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 650px;
  gap: 2.5rem;
  color: var(--black-2);
  padding: 2.5rem;
  position: relative;
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
  animation: ${({ contactAnimation }) => contactAnimation};
  transition: 0.2s;

  h3 {
    text-align: center;
    font-size: 3.2rem;
    font-weight: bold;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    max-width: 70rem;
    width: 100%;

    div {
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: flex-start;
      gap: 0.5rem;
      width: 100%;

      input {
        border: 0.2rem solid var(--black-2);
        border-radius: 1rem;
        height: 5.4rem;
        padding: 0 1.5rem;
        width: 100%;
        -webkit-box-shadow: 0.3rem 0.3rem 0.3rem 0.2rem var(--black-0);
        box-shadow: 0.3rem 0.3rem 0.3rem 0.2rem var(--black-0);

        ::placeholder {
          font-size: 1.6rem;
        }

        :focus {
          outline: 0.3rem solid var(--blue-0);
          border-color: transparent;
        }
      }

      label {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        font-weight: 600;
      }

      textarea {
        display: flex;
        border-radius: 1rem;
        resize: none;
        height: 11.2rem;
        width: 100%;
        max-width: 70rem;
        padding: 1.5rem;
        border: 0.2rem solid var(--black-2);
        -webkit-box-shadow: 0.3rem 0.3rem 0.3rem 0.2rem var(--black-0);
        box-shadow: 0.3rem 0.3rem 0.3rem 0.2rem var(--black-0);

        ::placeholder {
          font-size: 1.6rem;
          font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
            sans-serif;
        }

        :focus {
          outline: 0.3rem solid var(--blue-0);
          border-color: transparent;
        }
      }

      input:focus + label {
        color: var(--blue-0);
      }

      textarea:focus + label {
        color: var(--blue-0);
      }
    }

    input[type="submit"] {
      cursor: pointer;
      width: 100%;
      height: 6rem;
      font-size: 2.2rem;
      font-weight: bold;
      background-color: var(--blue-0);
      border: none;
      border-radius: 1rem;
      -webkit-box-shadow: 0.3rem 0.3rem 0.3rem 0.2rem var(--black-0);
      box-shadow: 0.3rem 0.3rem 0.3rem 0.2rem var(--black-0);
      color: var(--white);
      transition: 0.2s;

      :hover {
        background-color: var(--black-2);
        transition: 0.2s;
        font-size: 2.5rem;
      }
    }
  }
`;
