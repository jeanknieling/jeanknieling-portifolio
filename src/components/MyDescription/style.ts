import styled from "styled-components";

export const MyDescriptionStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem 2.5rem;
  gap: 5rem;
  width: 100%;
  max-width: 100rem;
  margin: 0 auto;
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
  animation: leftAnimation 1.5s ease-in-out forwards;

  div:nth-child(3) {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    p:nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      flex-wrap: wrap;
      white-space: nowrap;
    }

    h1 {
      text-align: center;
    }

    h1 > strong:nth-child(1) {
      color: var(--blue-0);
      font-size: 3rem;
      font-weight: bold;
    }

    p:nth-child(3) {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }

    p:nth-child(3) > span {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      flex-wrap: nowrap;
      font-size: 2rem;
      width: fit-content;
    }

    p:nth-child(3) > span > span {
      padding: 0 0.5rem;
      height: 3.3rem;
    }
  }

  div:nth-child(4) {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    p:nth-child(1) {
      display: flex;
      justify-content: center;
    }

    h2 {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }

    h2 > span:nth-child(1) {
      font-size: 3rem;
      margin-left: 1rem;
      font-weight: bold;
    }

    h2 > span:nth-child(2) {
      color: var(--blue-0);
      font-size: 3rem;
      margin-left: 1rem;
      font-weight: bold;
      white-space: nowrap;
    }
  }

  div:last-child {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    width: 100%;

    @media (min-width: 600px) {
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
    }
  }

  span {
    font-size: 2.5rem;
  }

  p {
    font-size: 2rem;
    display: flex;
    align-items: flex-end;
  }

  @media (min-width: 600px) {
    div:nth-child(3) {
      align-items: flex-start;
    }

    div:nth-child(4) {
      align-items: flex-start;

      h2 > span:nth-child(1) {
        margin-left: 0;
      }
    }
  }

  @media (min-width: 900px) {
    gap: 6rem;
  }
`;

export const WallpaperStyled = styled.img`
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const PStyled = styled.p`
  line-height: 2.5rem;
  padding: 1.5rem;
  border: 0.3rem solid var(--blue-0);
  border-radius: 0.8rem;
  font-style: italic;
  text-indent: center;
`;

export const ContainerStyled = styled.div`
  position: relative;
  background: var(--black-1);
`;
