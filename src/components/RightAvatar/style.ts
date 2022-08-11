import styled from "styled-components";

interface Props {
  size: string;
  color: string;
}

export const RightAvatarStyled = styled.img<Props>`
  border-radius: 100%;
  border: 5px solid ${({ color }) => color && color};
  width: ${({ size }) => size && size};
  height: ${({ size }) => size && size};
  position: absolute;
  right: 0px;
  display: none;
  top: 50px;
  opacity: 0;
  object-fit: cover;
  object-position: top;
  padding: 5px;

  @media (min-width: 700px) {
    @keyframes rightAvatarAnimation {
      form {
        right: -50px;
      }
      to {
        right: 25px;
        opacity: 1;
      }
    }

    display: block;
    animation: rightAvatarAnimation 3s forwards;
    transition: 1s;
  }

  @media (min-width: 900px) {
    top: 22px;
    width: 320px;
    height: 320px;
    transition: 1s;
  }
`;
