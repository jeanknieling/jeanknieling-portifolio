import styled from "styled-components";

export const MyDescriptionStyled = styled.main`
  position: absolute;
  z-index: -2;
  max-width: 1300px;

  div {
    display: flex;
    flex-direction: column;
    padding: 30px 25px;
    gap: 20px;

    p:nth-child(1) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 15px;
    }

    p {
      display: flex;
      align-items: flex-end;
      gap: 8px;
    }

    h1 {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }

  h2 {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  p,
  h1,
  h2 {
    font-size: 20px;
  }

  span {
    font-size: 25px;
    color: #f05600;
  }
`;

export const GifStyled = styled.img`
  position: absolute;
  z-index: -3;
  height: 100%;
  width: 100%;
  left: 0;
  opacity: 0.09;
`;

export const PStyled = styled.p`
  line-height: 25px;
  padding: 15px 15px;
  border: 2px solid #f05600;
  margin: 30px 25px;
`;

export const EmogiSpan = styled.span`
  font-size: 30px;
`;
