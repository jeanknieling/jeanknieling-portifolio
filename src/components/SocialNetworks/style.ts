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

        SVG {
          font-size: 32px;
          color: #0055FF;
        }
      }
    }

    @media (min-width: 500px) {
      gap: 20px;
    }

    @media (min-width: 600px) {
      li {
        a {
          SVG {
            font-size: 45px;
            transition: 1s;
          }
        }
      }
    }
  }
`;
