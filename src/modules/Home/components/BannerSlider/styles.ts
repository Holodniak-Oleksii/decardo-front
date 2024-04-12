import { IActiveble } from "@/common/types";
import Image from "next/image";
import styled, { css } from "styled-components";
import { IRotate, ISectorProps } from "./types";

// 360 / 6 = 60
const ROTATE_ANGLE = 60;
const colors = [
  "#0400046c",
  "#4da9ff40",
  "#738a9e47",
  "#fa4b4550",
  "#b8e9164c",
  "#00ff4c4a",
];

export const Wrapper = styled.div`
  ${({ theme }) => theme.content.mainContainerWidth}
  ${({ theme }) => theme.content.mainContainerPadding}
  height: 100%;
`;

export const HexagonSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -35%);
  width: 75%;
  height: 110%;
`;

export const Circle = styled.div<IRotate>`
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 0.8s ease;
  transform-origin: center;
  ${({ position }) => css`
    transform: rotate(${position * ROTATE_ANGLE}deg);
    path {
      fill: ${colors[position - 1]};
    }
  `}
`;

export const Sector = styled.div<ISectorProps & IActiveble>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 1400px;
  height: 100px;
  transform-origin: center;
  transition: transform 0.6s ease-in, opacity 0.7s ease-in-out;
  transform: translate(-50%, -50%)
    rotate(${({ index }) => 35 + index * ROTATE_ANGLE}deg);
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
`;

export const SectorRelative = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const SectorContent = styled.div<ISectorProps & IRotate>`
  position: absolute;
  right: -25%;
  top: 0%;
  height: 300px;
  width: 500px;
  transition: all 0.5s ease-in;
  transform: translateY(-70%)
    rotate(
      -${({ position, index }) => 35 + index * ROTATE_ANGLE + position * ROTATE_ANGLE}deg
    );
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
`;

export const SectorSlider = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const StarBlok = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 130%;
  height: 130%;
  transform: translate(-50%, -50%);
`;

export const StarRelative = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const List = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  aspect-ratio: 105 / 100;
`;

export const HexagonSvg = styled.svg`
  width: 120%;
  height: 120%;
  path {
    width: 100%;
    height: 100%;
    transition: all 0.5s ease;
  }
`;

export const CoverSvg = styled.div`
  width: 100%;
  height: 100%;
  transform: rotate(40deg);
  position: relative;
  ${({ theme }) => theme.flex.center}
`;

export const Title = styled.div<IRotate>`
  color: #fff;
  font-size: 54px;
  transition: none;
  font-weight: 800;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(0, -50%);
`;

export const Pagination = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  ${({ theme }) => theme.flex.column};
  align-items: center;
`;

export const NavLine = styled.div<IActiveble>`
  width: 1px;
  background-color: #fff;
  transition: all 0.5s ease;

  ${({ isActive }) =>
    isActive
      ? css`
          height: 40px;
          margin: 4px 0;
        `
      : css`
          height: 16px;
          margin: 2px 0;
        `}
`;

export const NavItem = styled.button<IActiveble>`
  width: 50px;
  height: 50px;
  color: #fff;
  font-size: 18px;
  border-radius: 50%;

  transition: all 0.5s ease;

  ${({ isActive }) =>
    isActive
      ? css`
          border: 1px solid #fff;
        `
      : css`
          border: 1px solid transparent;
        `}
`;

export const ItemTitle = styled.div`
  font-size: 24px;
  line-height: 1.3;
  color: #ffffff;
  font-weight: 700;
`;

export const ItemDescription = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: #ffffff;
  font-weight: 400;
`;

export const Background = styled(Image)<IActiveble>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.4s ease-in;
  opacity: ${({ isActive }) => (isActive ? 0.2 : 0)};
  /* filter: grayscale(0.9); */
`;

export const Container = styled.div`
  width: 100%;
  height: 100svh;
  position: relative;
  overflow: hidden;
`;
