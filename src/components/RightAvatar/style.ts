import styled from "styled-components";

interface Props {
  size: string;
  color: string;
}

export const RightAvatarStyled = styled.img<Props>`
  border-radius: 100%;
  border: 0.5rem solid ${({ color }) => color && color};
  width: ${({ size }) => size && size};
  height: ${({ size }) => size && size};
  position: absolute;
  right: 0;
  display: none;
  opacity: 0;
  object-fit: cover;
  object-position: top;
  padding: 0.5rem;
  transition: 0.5s;


  @media (min-width: 770px) {
    @keyframes rightAvatarAnimation {
      form {
        right: -5rem;
      }
      to {
        right: 2.5rem;
        opacity: 1;
      }
    }

    display: block;
    animation: rightAvatarAnimation 1s forwards;
  }

  @media (min-width: 900px) {
    width: 31rem;
    height: 31rem;
  }
`;
