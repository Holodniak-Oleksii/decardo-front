import { IOpenable } from "@/common/types";
import styled, { css, keyframes } from "styled-components";

const bgAnimation = keyframes`
  0% {
    background: #1c1d1e00;
  }
  100% {
    background: #ffffff05;
  }
`;

export const Wrapper = styled.div<Partial<IOpenable>>`
  ${({ theme }) => theme.flex.row};
  gap: 24px;
  margin-left: auto;
  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 16px;

    flex-direction: row-reverse;
    transition: all 0.1s ease;
    ${({ isOpen }) =>
      isOpen
        ? css`
            animation: ${bgAnimation} both;
            animation-delay: 0.4s;
            animation-duration: 0.3s;
          `
        : css`
            background: #1c1d1e00;
          `}
    svg {
      path {
        stroke: ${({ theme }) => theme.colors.main0};
      }
    }
  }
`;

export const Avatar = styled.div`
  ${({ theme }) => theme.flex.center};
  background: ${({ theme }) => theme.colors.main900};
  border: 2px solid ${({ theme }) => theme.colors.main400};
  cursor: pointer;

  text-transform: uppercase;
  height: 44px;
  width: 44px;
  border-radius: 50%;
  position: relative;

  overflow: hidden;
  span {
    color: ${({ theme }) => theme.colors.main0};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Create = styled.button`
  ${({ theme }) => theme.flex.center};
  svg {
    height: 36px;
    width: 36px;
  }
  @media screen and (max-width: 767px) {
    ${({ theme }) => theme.text.overflow};
    color: ${({ theme }) => theme.colors.main0};
    width: calc(100% - 60px);
    justify-content: flex-start;
    font-size: 16px;
    font-weight: 800;
  }
`;
