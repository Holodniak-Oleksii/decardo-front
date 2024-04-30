import styled from "styled-components";
import { IColorProps } from "./types";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.row}
  width: 100%;
  gap: 8px;
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.main100};
  background-color: ${({ theme }) => theme.colors.main700};
  padding: 5px 8px;
  border-radius: 2px;
  transition: 0.2s ease;

  outline: none;
  border: none;
  width: calc(100% - 30px);
  font-size: 12px;
  font-weight: 400;

  &::placeholder {
    color: ${({ theme }) => theme.colors.main10};
  }
`;

export const Color = styled.div<IColorProps>`
  height: 24px;
  width: 24px;
  border-radius: 4px;
  background-color: ${({ hex }) => hex};
`;

export const Picker = styled.div`
  border-radius: 4px;
  position: relative;

  & .react-colorful {
    height: 150px;
    width: 150px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, calc(100% + 8px));
    z-index: 3;
  }
  & .react-colorful__saturation {
    border-radius: 4px 4px 0 0;
  }
  & .react-colorful__hue {
    height: 24px;
    border-radius: 0 0 4px 4px;
  }
  & .react-colorful__hue-pointer {
    width: 1px;
    height: 24px;
    border-radius: 0;
  }
`;
