import styled from "styled-components";

export const MyDescriptionStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 25px;
  gap: 50px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
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
  animation: leftAnimation 1.2s ease-in-out forwards;

  @media (min-width: 700px) {
    gap: 70px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;

    p:nth-child(1) > span:nth-child(1) {
      color: #0055ff;
    }

    p:nth-child(4) {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      white-space: nowrap;
    }

    p:nth-child(4) span {
      padding: 0 5px;
      height: 38px;
    }

    h1 > span:nth-child(1) {
      color: #0055ff;
      line-height: 1.3;
    }

    h2 > span:nth-child(2) {
      color: #0055ff;
    }
  }

  div:last-child {
    gap: 50px;

    @media (min-width: 600px) {
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
    }
  }

  span {
    font-size: 25px;
  }

  p {
    font-size: 20px;
    display: flex;
    align-items: flex-end;
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
  line-height: 25px;
  padding: 15px 15px;
  border: 3px solid #0055ff;
  border-radius: 8px;
  font-style: italic;
`;

export const ContainerStyled = styled.div`
  position: relative;
  background: rgba(0, 0, 0, 0.6);
`;
