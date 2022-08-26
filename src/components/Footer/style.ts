import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(0, 0, 0, 1);
  width: 100%;
  height: 20rem;
  padding: 2rem;
  transition: 0s;

  ul {
    padding-top: 0.5rem;
    gap: 1rem;
  }

  p {
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;

    SVG {
      padding: 0.3rem;
      font-size: 2.2rem;
    }
  }

  p:nth-child(4) {
    font-style: italic;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    a {
      color: var(--blue-0);
      cursor: pointer;
      margin-left: 0.5rem;
    }
  }
`;
