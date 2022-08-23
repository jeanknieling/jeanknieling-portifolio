import styled from "styled-components";

export const DivContainerStyled = styled.div`
  max-height: 30px;
  max-width: 30px;

  @media (min-width: 750px) {
    display: none;
    position: relative;
    top: -500px;
  }
`;

export const Label = styled.label`
  cursor: pointer;
  position: relative;
  display: block;
  height: 30px;
  width: 30px;
  margin-top: 5px;

  span {
    position: absolute;
    display: block;
    height: 5px;
    width: 100%;
    border-radius: 30px;
    background: #F2F2F2;
    transition: 0.6s;
  }

  span:nth-child(1) {
    top: 0;
  }

  span:nth-child(2) {
    top: 8px;
  }

  span:nth-child(3) {
    top: 16px;
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
    top: 8px;
  }

  &:checked + ${Label} span:nth-child(2) {
    opacity: 0;
  }

  &:checked + ${Label} span:nth-child(3) {
    transform: rotate(45deg);
    top: 8px;
  }

  @media (min-width: 700px) {
    display: none;
  }
`;
