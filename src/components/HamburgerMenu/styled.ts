import styled from "styled-components";

export const DivContainerStyled = styled.div`
  max-height: 3rem;
  max-width: 3rem;

  @media (min-width: 750px) {
    display: none;
    position: relative;
    top: -50rem;
  }
`;

export const Label = styled.label`
  cursor: pointer;
  position: relative;
  display: block;
  height: 3rem;
  width: 3rem;
  margin-top: 0.5rem;

  span {
    position: absolute;
    display: block;
    height: 0.5rem;
    width: 100%;
    border-radius: 3rem;
    background: var(--white);
    transition: 0.3s;
  }

  span:nth-child(1) {
    top: 0;
  }

  span:nth-child(2) {
    top: 0.8rem;
  }

  span:nth-child(3) {
    top: 1.6rem;
  }

  @media (min-width: 750px) {
    display: none;
  }
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;

  &:checked + ${Label} span:nth-child(1) {
    transform: rotate(-45deg);
    top: 0.8rem;
  }

  &:checked + ${Label} span:nth-child(2) {
    opacity: 0;
  }

  &:checked + ${Label} span:nth-child(3) {
    transform: rotate(45deg);
    top: 0.8rem;
  }

  @media (min-width: 700px) {
    display: none;
  }
`;
