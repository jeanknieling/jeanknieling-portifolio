import styled from "styled-components";

export const SocialNetworksStyled = styled.section`
  ul {
    display: flex;
    justify-content: space-between;

    li {
      a {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        width: 4rem;
        height: 4rem;

        SVG {
          font-size: 4rem;
          color: var(--blue-0);

          :hover {
            color: var(--white);
            font-size: 5rem;
            transition: 0.5s;
          }
        }
      }
    }

    @media (min-width: 600px) {
      gap: 2rem;
      li {
        a {
          SVG {
            font-size: 5rem;
            :hover {
              color: var(--white);
              font-size: 6rem;
              transition: 0.5s;
            }
          }
        }
      }
    }
  }
`;
