import styled from "styled-components";
import { IRangeProps } from "./types";

const thumbSize = 2;

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.column};
  width: 100%;
  gap: 4px;
`;

export const Container = styled.div<IRangeProps>`
  --width: 100%;
  ${({ max, range, min }) =>
    `--indicator-position: calc(${
      (range - min) / (max - min)
    } * (var(--width) - ${thumbSize}px) + ${thumbSize}px);`}
  height: ${thumbSize}px;
  background-color: ${({ theme }) => theme.colors.main400};
  width: 100%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    width: 4px;
    left: var(--indicator-position);
    height: 12px;
    min-width: 6px;
    transform: translateY(-50%) translateX(-50%);
    border-radius: 1px;
    background-color: ${({ theme }) => theme.colors.main0};
  }
  .tooltip {
    left: var(--indicator-position);
  }
`;

export const Input = styled.input`
  height: 12px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: none;
  cursor: pointer;
  overflow: hidden;
  &::-webkit-slider-thumb {
    background-color: transparent;
    height: ${thumbSize}px;
    width: ${thumbSize}px;
    appearance: none;
    transition: 0.3s;
    box-sizing: border-box;
  }
  &::-moz-range-thumb {
    background-color: transparent;
    height: ${thumbSize}px;
    width: ${thumbSize}px;
    appearance: none;
    transition: 0.3s;
    box-sizing: border-box;
    border: none;
  }
`;

export const Box = styled.div`
  ${({ theme }) => theme.flex.center};
  width: 100%;
  gap: 4px;
  margin-top: auto;
`;
