import styled from "styled-components";

export const SocialNetworksStyled = styled.section`
  ul {
    display: flex;
    justify-content: space-between;

    li {
      a {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        SVG:hover {
          color: red;
        }
      }
    }

    @media (min-width: 500px) {
      gap: 20px;
    }
  }
`;
