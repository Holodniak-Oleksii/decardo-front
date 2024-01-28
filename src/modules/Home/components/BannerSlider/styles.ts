import { IActiveble } from "@/common/types";
import styled, { css } from "styled-components";
import { IRotate, ISectorProps } from "./types";

// 360 / 6 = 60
const ROTATE_ANGLE = 60;
const colors = [
  "#4494fd",
  "#fa4b45",
  "#fffc4d",
  "#b8e916",
  "#e90ada",
  "#00ffd9",
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
  transform: translate(-40%, -30%);
  width: 80%;
  height: 130%;
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
  height: 100px;
  transform-origin: center;
  transition: transform 0.6s ease-in, opacity 0.2s ease-out;
  transform: translate(-50%, -50%)
    rotate(${({ index }) => 35 + index * ROTATE_ANGLE}deg);
  opacity: ${({ isActive }) => (isActive ? 1 : 0.4)};
`;

export const SectorRelative = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const SectorContent = styled.div<ISectorProps & IRotate>`
  position: absolute;
  right: -30%;
  top: 0%;
  height: 300px;
  width: 500px;
  transition: all 0.5s ease-in;
  transform: translateY(-100%)
    rotate(
      -${({ position, index }) => 35 + index * ROTATE_ANGLE + position * ROTATE_ANGLE}deg
    );
  background-color: #cd0dde92;
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
  ${({ theme }) => theme.flex.center}
`;

export const Pagination = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  ${({ theme }) => theme.flex.column};
  gap: 16px;
`;

export const NavItem = styled.button<IActiveble>`
  width: 160px;
  height: 30px;
  color: #fff;
  font-size: 16px;
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: #fff;
      color: #000;
    `}
`;
