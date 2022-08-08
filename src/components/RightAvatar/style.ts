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
  @media (min-width: 700px) {
    @keyframes rightAvatarAnimation {
      form {
        right: -50px;
      }
      to {
        right: 50px;
        opacity: 1;
      }
    }

    display: block;
    animation: rightAvatarAnimation 2s forwards;
  }
`;
