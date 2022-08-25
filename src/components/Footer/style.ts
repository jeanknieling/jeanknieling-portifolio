import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(0, 0, 0, 1);
  width: 100%;
  height: 200px;
  padding: 20px;
  transition: 0s;

  ul {
    padding-top: 5px;
    gap: 10px;
  }

  p {
    color: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;

    SVG {
      padding: 3px;
      font-size: 22px;
    }
  }

  p:nth-child(4) {
    font-style: italic;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    a {
      color: #0055ff;
      cursor: pointer;
      margin-left: 5px;
    }
  }
`;
