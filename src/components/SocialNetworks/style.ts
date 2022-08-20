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
        width: 40px;
        height: 40px;

        SVG {
          font-size: 40px;
          color: #0055ff;

          :hover {
            color: #f2f2f2;
            font-size: 50px;
            transition: 0.5s;
          }
        }
      }
    }

    @media (min-width: 600px) {
      gap: 20px;
      li {
        a {
          SVG {
            font-size: 50px;
            :hover {
            color: #f2f2f2;
            font-size: 60px;
            transition: 0.5s;
          }
          }
        }
      }
    }
  }
`;
