import styled from "styled-components";

interface Props {
  isOpen: boolean;
}

export const NavigatorMenuStyled = styled.nav<Props>`
  position: absolute;
  right: ${(props) => (props.isOpen ? "0" : "-700px")};
  top: 99px;
  transition: 1s;
  padding: 15px;
  width: 100%;
  z-index: -1;
  background: #0575e6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #021b79,
    #0575e6
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #021b79, #0575e6);

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;

    li {
      cursor: pointer;

      a {

        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        font-weight: bold;
        padding: 10px 20px;
        white-space: nowrap;
        height: 45px;
        gap: 10px;
        background-color: #f2f2f2;
        color: #0444AA;
        border: 2px solid transparent;
        border-radius: 5px;
        -webkit-box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.2);
        box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.2);
        transition: 0.3s;

        :hover {
          border: 2px solid #f2f2f2;
          background-color: #0444AA;
          color: #f2f2f2;
          transition: 0.3s;

          SVG {
            color: #f2f2f2;
            transition: 0.3s;
          }
        }

        SVG {
          color: #0444AA;
          transition: 0.3s;
        }
      }
    }
  }

  @media (min-width: 700px) {
    position: static;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    background: transparent;
    background: -webkit-linear-gradient(transparent);
    background: linear-gradient(transparent);

    ul {
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }
  }

  @media (min-width: 900px) {
    justify-content: flex-end;
    width: 100%;
    max-width: 850px;
  }
`;
