import styled, { css } from "styled-components";
import { IIterator } from "./types";

const circleColors = ["#4494fd", "#fa4b45", "#fffc4d"];

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.center};
  width: 100%;
  height: 100%;
  padding: 16px;
`;

export const Animation = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  aspect-ratio: 1 / 1;
  transform-origin: center;
  height: 100%;
`;

export const Relative = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Circle = styled.i<IIterator>`
  position: absolute;
  inset: 0;
  transition: 0.5s;
  ${({ index }) => css`
    border: 6px solid ${circleColors[index]};
    filter: drop-shadow(0 0 20px ${circleColors[index]});
  `}

  &:nth-child(1) {
    border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
    animation: rotate 6s linear infinite;
  }
  &:nth-child(2) {
    border-radius: 41% 44% 56% 59%/38% 62% 63% 37%;
    animation: rotate 4s linear infinite;
  }
  &:nth-child(3) {
    border-radius: 41% 44% 56% 59%/38% 62% 63% 37%;
    animation: rotate 10s linear infinite reverse;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Container = styled.div`
  min-height: fit-content;
  padding: 24px;
  height: 100%;
  max-height: 600px;
  width: 100%;
  max-width: 500px;
  position: relative;

  @media (hover: hover) {
    &:not(:hover) {
      i {
        border: 2px solid #fff;
        filter: none;
      }
    }
  }
`;
