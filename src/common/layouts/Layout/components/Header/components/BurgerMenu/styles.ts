import { IOpenable } from "@/common/types";
import Link from "next/link";
import styled, { css, keyframes } from "styled-components";

const moveAnimation = keyframes`
  0% {
    transform: translateY(calc(100dvh + 136px));
  }
  100% {
    transform: translateY(calc(100dvh - 64px));
  }
`;

const moveAnimationRevert = keyframes`
  0% {
    transform: translateY(calc(100dvh - 64px));
  }
  100% {
    transform: translateY(calc(100dvh + 136px));
  }
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.center};
  gap: 12px;
  position: relative;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const Burger = styled.div`
  ${({ theme }) => theme.flex.center};
  gap: 12px;
  cursor: pointer;
  z-index: 2;
`;

export const CircleOverlay = styled.div<IOpenable>`
  width: 0;
  height: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: -1;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease-in-out;
  background: ${({ theme }) => theme.colors.main900};

  ${({ isOpen }) =>
    isOpen &&
    css`
      width: 500vh;
      height: 500vh;
    `}
`;

export const Button = styled.button<IOpenable>`
  width: 24px;
  height: 18px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.5s;
  span {
    background: ${({ theme }) => theme.colors.main900};
    width: 100%;
    height: 2px;
    border-radius: 100px;
    transition: 0.5s ease;
    :nth-child(3) {
      width: 60%;
    }
  }
  @media screen and (max-width: 767px) {
    ${({ isOpen }) =>
      isOpen &&
      css`
        span {
          background: ${({ theme }) => theme.colors.main0};
        }
        span:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }

        span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
          width: 100%;
        }

        span:nth-child(2) {
          transform: translateX(-20px);
          opacity: 0;
        }
      `}
  }
`;

export const Menu = styled.div<IOpenable>`
  border-top: 1px solid ${({ theme }) => theme.colors.main400};
  ${({ theme }) => theme.flex.column};
  position: fixed;
  top: 64px;
  left: 0;
  width: 100vw;
  z-index: 120;
  height: calc(100svh - 64px);
  transition: all 0.4s ease;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};
  @media screen and (max-width: 540px) {
    top: 60px;
  }
`;

export const Container = styled.div<IOpenable>`
  width: 100%;
  flex-grow: 1;
  position: relative;
  padding: 0 0 16px 0;
  ${({ theme }) => theme.flex.row};
  flex-direction: column;
  overflow: hidden;
  overflow-y: auto;
`;

export const List = styled.div`
  ${({ theme }) => theme.flex.column};
  width: 100%;
`;

export const NavItem = styled(Link)`
  color: ${({ theme }) => theme.colors.main0};
  font-size: 16px;
  padding: 16px;
  position: relative;
`;

export const Indent = styled.div`
  height: 64px;
`;

export const SocialList = styled.div<IOpenable>`
  ${({ theme }) => theme.flex.center};
  gap: 16px;
  padding: 20px 16px;
  transition: all 0.3s ease;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  ${({ isOpen }) =>
    isOpen
      ? css`
          animation: ${moveAnimation} both;
          animation-delay: 0.2s;
          animation-duration: 0.3s;
        `
      : css`
          animation: ${moveAnimationRevert} both;
          animation-duration: 0.3s;
        `}
`;
