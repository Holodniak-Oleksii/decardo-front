import { IActiveble } from "@/common/types";
import Link from "next/link";
import styled, { css, keyframes } from "styled-components";
import { IHeaderWrapperProps } from "./types";

const appearAnim = keyframes`
  from{
    transform: translateY(-15px) ;
    opacity: 0;
  }
  to{
    transform: translateY(0) ;
    opacity: 1;
  }
`;

export const Wrapper = styled.header<IHeaderWrapperProps>`
  background: ${({ theme }) => theme.colors.main0};
  border-bottom: 1px solid ${({ theme }) => theme.colors.main100};
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.4s ease-in-out;
  @media screen and (max-width: 1440px) {
    height: 72px;
  }
  @media screen and (max-width: 1024px) {
    height: 64px;
  }
  @media screen and (max-width: 540px) {
    height: 60px;
  }
  transform: translateY(${({ visible }) => (visible ? 0 : -100)}%);
  will-change: transform;
`;

export const Content = styled.div`
  ${({ theme }) => theme.content.mainContainerPadding};
  ${({ theme }) => theme.content.mainContainerWidth};
  ${({ theme }) => theme.flex.between};
  width: 100%;
  height: 100%;
  position: relative;
  gap: 16px;
`;

export const Navigation = styled.div`
  ${({ theme }) => theme.flex.row};
  width: fit-content;
  height: 100%;
  gap: 32px;
  padding: 12px 0;
`;

export const NavItem = styled(Link)<IActiveble>`
  color: ${({ theme }) => theme.colors.main900};
  position: relative;

  ${({ isActive }) =>
    isActive &&
    css`
      &::before {
        content: "";
        position: absolute;
        bottom: -8px;
        left: -2px;
        width: calc(100% + 4px);
        height: 1px;
        background: ${({ theme }) => theme.colors.main900};
        animation: ${appearAnim} 0.4s ease-in-out both;
      }
    `}
  font-size: 16px;
`;

export const Logo = styled.div`
  height: 100%;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.colors.main900};
  font-size: 40px;
  font-weight: 900;
  padding: 6px;
  ${({ theme }) => theme.flex.center};
  color: ${({ theme }) => theme.colors.main0};
  border-radius: 4px;
  cursor: pointer;
  margin-right: 20px;
  span {
    font-size: 10px;
    height: 100%;
  }
`;
