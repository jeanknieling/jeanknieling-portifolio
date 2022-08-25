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
  top: 40px;
  opacity: 0;
  object-fit: cover;
  object-position: top;
  padding: 5px;
  transition: 1s;


  @media (min-width: 750px) {
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
    animation: rightAvatarAnimation 1s forwards;
  }

  @media (min-width: 900px) {
    width: 350px;
    height: 350px;
    transition: 1s;
  }
`;
