import Image from "next/image";
import styled, { css } from "styled-components";
import { IContentProps } from "./types";

const hexagons = css`
  width: var(--s);
  margin: var(--m);
  cursor: pointer;
  height: calc(var(--s) * 1.1547);
  display: inline-block;
  font-size: initial;
  clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
  margin-bottom: calc(var(--m) - var(--s) * 0.2885);
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray800};
  @media screen and (hover: hover) {
    &:hover {
      img {
        filter: grayscale(0);
        transform: scale(1.1);
      }
      .title {
        opacity: 1;
        transform: translateY(-50%);
      }
    }
  }
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.content.indention};
  width: 100%;
`;

export const Container = styled.div`
  ${({ theme }) => theme.content.mainContainerWidth}
  ${({ theme }) => theme.content.mainContainerPadding}
  height: 100%;
`;

export const Body = styled.div`
  font-size: 0;
  width: 100%;
  &::before {
    content: "";
    width: calc(var(--s) / 2 + var(--m));
    float: left;
    height: 120%;
    shape-outside: repeating-linear-gradient(
      #0000 0 calc(var(--f) - 3px),
      #000 0 var(--f)
    );
  }
`;

export const Hexagon = styled.div`
  ${hexagons}
  @media screen and (max-width: 1024px) {
    &:nth-child(1),
    &:nth-child(2) {
      display: none;
    }
  }
  @media screen and (max-width: 540px) {
    &:nth-child(2) {
      display: inline-block;
    }
  }
`;

export const DoubleHexagon = styled.div`
  ${hexagons}
  position: absolute;
  z-index: -1;
  left: 4px;
  top: 4px;
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  transform-origin: center;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.main0};
`;

export const Relative = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
`;

export const CardBackground = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  object-fit: cover;
  transition: all 0.3s ease;
  filter: grayscale(1);
`;

export const Content = styled.div<IContentProps>`
  display: flex;
  --s: calc(${({ size }) => size}px / 5 - 8px);
  --m: 4px; /* margin */
  --f: calc(1.732 * var(--s) + 4 * var(--m) - 1px);
  padding-bottom: calc(var(--s) / 3);
  @media screen and (max-width: 1024px) {
    --s: calc(${({ size }) => size}px / 4 - 8px);
  }
  @media screen and (max-width: 540px) {
    --s: calc(${({ size }) => size}px / 3 - 8px);
  }
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.main0};
  width: 100%;
  background-color: #00000076;
  backdrop-filter: blur(2px);
  padding: 12px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(0);
  z-index: 2;
  text-align: center;
  opacity: 0;
  transition: all 0.3s ease;
`;
