import { IActiveble } from "@/common/types";
import Image from "next/image";
import styled, { css } from "styled-components";
import { IRotate, ISectorProps } from "./types";

// 360 / 6 = 60
const ROTATE_ANGLE = 60;

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
  width: 90%;
  height: 130%;

  @media screen and (max-width: 1280px) {
    height: 110%;
  }
`;

export const Circle = styled.div<IRotate>`
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 0.8s ease;
  transform-origin: center;
  ${({ position }) => css`
    transform: rotate(${position * ROTATE_ANGLE}deg);
  `}
  path {
    fill: #fa4b45d4;
  }
`;

export const Sector = styled.div<ISectorProps & IActiveble>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 1400px;
  height: 100px;
  transform-origin: center;
  transition:
    transform 0.6s ease-in,
    opacity 0.7s ease-in-out;
  transform: translate(-50%, -50%)
    rotate(${({ index }) => 35 + index * ROTATE_ANGLE}deg);
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
`;

export const SectorRelative = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const SectorContent = styled.div<
  Partial<ISectorProps> & Partial<IRotate> & Partial<IActiveble>
>`
  position: absolute;
  right: -45%;
  top: 0%;
  height: fit-content;
  width: 500px;
  transition: all 0.5s ease-in;
  transform: translateY(-130%)
    rotate(
      -${({ position, index }) => 35 + index! * ROTATE_ANGLE + position! * ROTATE_ANGLE}deg
    );
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  gap: 16px;
  padding: 48px;
  box-shadow: ${({ theme }) => theme.boxShadow.xs};
  background: #0000009f;
  backdrop-filter: blur(3px);
  @media screen and (max-width: 1280px) {
    right: -70%;
  }
  @media screen and (max-width: 1024px) {
    right: -60%;
    width: 400px;
    padding: 24px;
    gap: 12px;
  }
  @media screen and (max-width: 767px) {
    left: 16px;
    right: auto;
    top: 50%;
    transform: translateY(-50%);
  }
  @media screen and (max-width: 540px) {
    width: calc(100% - 32px);
    backdrop-filter: blur(0);
    background: #000000c4;

    ${({ isActive }) =>
      isActive
        ? css`
            transform: translateY(-50%);
            opacity: 1;
          `
        : css`
            opacity: 0;
            transform: translateY(0%);
          `}
  }
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

  @media screen and (max-width: 1440px) {
    width: 110%;
    height: 110%;
  }
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
  @media screen and (max-width: 1440px) {
    width: 110%;
    height: 110%;
  }
  @media screen and (max-width: 1280px) {
    width: 100%;
    height: 100%;
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
  font-size: 48px;
  transition: none;
  font-weight: 800;
  position: absolute;
  top: 60%;
  left: 51%;
  transform: translate(0, -50%);

  @media screen and (max-width: 1280px) {
    font-size: 36px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 28px;
  }
`;

export const Pagination = styled.div`
  position: absolute;
  top: 40px;
  right: 80px;
  ${({ theme }) => theme.flex.column};
  align-items: center;
  @media screen and (max-width: 1024px) {
    right: 44px;
  }
  @media screen and (max-width: 540px) {
    flex-direction: row;
    right: 0;
    padding: 16px;
    justify-content: space-between;
    width: 100%;
    top: auto;
    bottom: 16px;
  }
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
  @media screen and (max-width: 540px) {
    ${({ isActive }) =>
      isActive
        ? css`
            height: 1px;
            width: 40px;
          `
        : css`
            height: 1px;
            width: 16px;
          `}
  }
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
          background: #0000003d;
          backdrop-filter: blur(0);
        `
      : css`
          background: #0000009f;
          backdrop-filter: blur(3px);
          border: 1px solid transparent;
        `}
  @media screen and (max-width: 1024px) {
    width: 40px;
    height: 40px;
    font-size: 14px;
  }
  @media screen and (max-width: 540px) {
    width: 32px;
    height: 32px;
    font-size: 12px;
  }
`;

export const ItemTitle = styled.div`
  font-size: 24px;
  line-height: 1.3;
  color: #ffffff;
  font-weight: 700;
  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
`;

export const ItemDescription = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: #ffffff;
  font-weight: 400;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
`;

export const Background = styled(Image)<IActiveble>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.4s ease-in;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  object-fit: cover;
  filter: grayscale(1);
`;

export const Container = styled.div`
  width: 100%;
  height: calc(100svh - 200px);
  position: relative;
  overflow: hidden;
  max-width: 1920px;
  margin: auto;
  min-height: 500px;
  max-height: 900px;

  @media screen and (max-width: 1280px) {
    max-height: 520px;
  }

  @media screen and (max-width: 1024px) {
    max-height: 440px;
    min-height: 360px;
  }
`;
