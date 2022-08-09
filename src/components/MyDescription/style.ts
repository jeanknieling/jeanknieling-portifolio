import styled from "styled-components";

export const MyDescriptionStyled = styled.div`
  background: rgba(0, 0, 0, 1);
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: -2;
  gap: 50px;
  padding: 30px 25px;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;

    p:nth-child(1) > span:nth-child(1) {
      color: #f05600;
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
      color: #f05600;
      line-height: 1.3;
    }

    h2 > span:nth-child(2) {
      color: #f05600;
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

export const GifStyled = styled.img`
  position: absolute;
  z-index: -3;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0;
  opacity: 0.05;
`;

export const PStyled = styled.p`
  line-height: 25px;
  padding: 15px 15px;
  border: 2px solid #f05600;
`;