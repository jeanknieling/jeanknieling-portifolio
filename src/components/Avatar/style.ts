import styled from "styled-components";

interface Props {
  size: string;
  color: string;
}

export const AvatarStyled = styled.img<Props>`
  border-radius: 100%;
  border: 3px solid ${({ color }) => color && color};
  width: ${({ size }) => (size && size)};
  height: ${({ size }) => (size && size)};
  object-fit: cover;
  object-position: top;
  padding: 2px;

  @media (min-width: 750px) {
    display: none;
  }
`;
