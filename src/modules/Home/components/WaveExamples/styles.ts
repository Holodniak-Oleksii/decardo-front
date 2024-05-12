import styled, { css } from "styled-components";
import { IWaveProps } from "./types";

export const Container = styled.div`
  ${({ theme }) => theme.flex.center};
  width: 100%;
  overflow: hidden;
  overflow-x: auto;
  @media screen and (max-width: 767px) {
    gap: 16px;
    padding: 0 16px;
    justify-content: flex-start;
  }
`;

export const Title = styled.div`
  font-size: 48px;
  width: 100%;
  font-weight: 700;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  color: ${({ theme }) => theme.colors.main0};

  @media screen and (max-width: 1280px) {
    font-size: 44px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 32px;
  }
  @media screen and (max-width: 767px) {
    font-size: 24px;
  }
`;

export const Items = styled.div`
  display: flex;
  gap: 0.4rem;
  perspective: calc(var(--index) * 55);
  & .item:hover {
    filter: inherit;
    transform: translateZ(calc(var(--index) * 10));
  }

  & .item:hover + * {
    filter: inherit;
    transform: translateZ(calc(var(--index) * 8.5)) rotateY(35deg);
    z-index: -1;
  }

  & .item:hover + * + * {
    filter: inherit;
    transform: translateZ(calc(var(--index) * 5.6)) rotateY(40deg);
    z-index: -2;
  }

  & .item:hover + * + * + * {
    filter: inherit;
    transform: translateZ(calc(var(--index) * 2.5)) rotateY(30deg);
    z-index: -3;
  }

  & .item:hover + * + * + * + * {
    filter: inherit;
    transform: translateZ(calc(var(--index) * 0.6)) rotateY(15deg);
    z-index: -4;
  }

  & .item:has(+ :hover) {
    filter: inherit;
    transform: translateZ(calc(var(--index) * 8.5)) rotateY(-35deg);
  }

  & .item:has(+ * + :hover) {
    filter: inherit;
    transform: translateZ(calc(var(--index) * 5.6)) rotateY(-40deg);
  }

  & .item:has(+ * + * + :hover) {
    filter: inherit;
    transform: translateZ(calc(var(--index) * 2.5)) rotateY(-30deg);
  }

  & .item:has(+ * + * + * + :hover) {
    filter: inherit;
    transform: translateZ(calc(var(--index) * 0.6)) rotateY(-15deg);
  }
`;

export const Item = styled.div<IWaveProps>`
  ${({ theme }) => theme.flex.center};
  width: calc(var(--index) * 4);
  height: calc(var(--index) * 15);
  background-color: #222;
  background-size: cover;
  background-position: center;
  background-image: url(${({ preview }) => preview.src});
  cursor: pointer;
  filter: grayscale(1) brightness(0.5);
  transition:
    transform 1.25s var(--transition),
    filter 3s var(--transition),
    width 1.25s var(--transition);
  will-change: transform, filter, rotateY, width;

  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 20px;
    right: calc(var(--index) * -1);
  }

  &::after {
    left: calc(var(--index) * -1);
  }
  ${({ isActive }) =>
    isActive
      ? css`
          width: 20vw;
          filter: inherit;
          z-index: 100;
          transform: translateZ(calc(var(--index) * 10));
          margin: 0 0.45vw;
          .categories {
            opacity: 1;
            visibility: visible;
          }
        `
      : css``}
  @media screen and (max-width: 767px) {
    transition: all 0.3s ease;
    height: 300px;
    ${({ isActive }) =>
      isActive
        ? css`
            width: 400px;
          `
        : css`
            width: 100px;
          `}
  }
  @media screen and (max-width: 540px) {
    height: 200px;
    ${({ isActive }) =>
      isActive
        ? css`
            min-width: 200px;
          `
        : css`
            min-width: 100px;
          `}
  }
`;

export const BlurBlock = styled.div`
  ${({ theme }) => theme.flex.center};
  padding: 16px;
  width: 100%;
  backdrop-filter: blur(3px);
  background-color: #ffffff26;
  transition: all 0.3s linear;
  opacity: 0;
  visibility: hidden;
  button {
    transition: all 0.3s linear;
    white-space: nowrap;
  }

  @media screen and (max-width: 540px) {
    button {
      padding: 4px 16px;
      font-size: 14px;
    }
  }
`;

export const Wrapper = styled.div`
  --index: calc(1vw + 1vh);
  --transition: cubic-bezier(0.1, 0.7, 0, 1);
  ${({ theme }) => theme.content.mainContainerWidth}
  ${({ theme }) => theme.content.mainContainerPadding}
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.main600};
  @media screen and (max-width: 540px) {
    padding-right: 0;
    padding-left: 0;
  }
`;

export const Wrap = styled.div`
  ${({ theme }) => theme.content.indention}
  ${({ theme }) => theme.flex.column};
  gap: 52px;
  width: 100%;
  @media screen and (max-width: 767px) {
    gap: 32px;
  }
`;
