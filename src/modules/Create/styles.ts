import { IInvalid } from "@/common/types";
import styled, { css } from "styled-components";
import { IScreenShotProps } from "./types";

export const Wrapper = styled.form`
  width: 100%;
  position: relative;
  min-height: 100svh;
`;

export const Content = styled.div`
  ${({ theme }) => theme.flex.row};
  align-items: flex-start;
  padding: 32px 0 240px 0;
  width: 100%;
  gap: 24px;
  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;

export const Container = styled.div`
  ${({ theme }) => theme.content.mainContainerWidth}
  ${({ theme }) => theme.content.mainContainerPadding}
  ${({ theme }) => theme.flex.column};
`;

export const ScreenShot = styled.div<IScreenShotProps>`
  ${({ theme }) => theme.flex.center};
  background: ${({ theme }) => theme.colors.main10};
  flex-direction: column;
  gap: 8px;
  padding: 16px;

  width: 40%;
  min-width: 200px;
  max-width: 500px;
  aspect-ratio: 1 / 1;
  border-radius: 8px;

  ${({ url }) =>
    url &&
    css`
      background-image: url(${url});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    `}

  ${({ theme, isError }) =>
    isError &&
    css`
      border: 1px solid ${theme.colors.error600};
      background: radial-gradient(
        circle,
        rgba(255, 255, 255, 0) 10%,
        ${theme.colors.error200} 100%
      );
    `};
  @media screen and (max-width: 767px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const FormContainer = styled.div`
  flex-grow: 1;
  max-width: calc(60% - 24px);
  ${({ theme }) => theme.flex.column}
  gap: 4px;
  @media screen and (max-width: 767px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const View = styled.div`
  background: ${({ theme }) => theme.colors.main10};
  ${({ theme }) => theme.flex.center}

  width: 100%;
  height: 100svh;
  min-height: 500px;
  position: relative;
`;
export const MessageContainer = styled.div`
  ${({ theme }) => theme.flex.center}
  width: 100%;
  height: 100%;
  padding: 16px;
`;

export const Message = styled.div<IInvalid>`
  width: 100%;
  max-width: 500px;
  margin: auto;
  padding: 32px 16px;
  border-radius: 6px;
  ${({ theme }) => theme.flex.center};
  flex-direction: column;
  gap: 12px;
  border: 1px solid
    ${({ theme, isError }) =>
      isError ? theme.colors.error600 : theme.colors.main600};
  ${({ theme, isError }) =>
    isError &&
    `background: radial-gradient(circle, rgba(255,255,255,0) 10%,  ${theme.colors.error200} 100%);`};
`;

export const MessageTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 24px;
  }
`;

export const Row = styled.div`
  ${({ theme }) => theme.flex.center};
  gap: 8px;
  svg {
    height: 60px;
    width: 60px;
  }
`;

export const MessageTag = styled.div`
  font-size: 12px;
  text-align: center;
  padding: 4px 8px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.main600};
  border: 1px solid ${({ theme }) => theme.colors.main600};
`;

export const MessageDescription = styled.div`
  text-align: center;
  font-size: 16px;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const Upload = styled.label`
  ${({ theme }) => theme.flex.center};
  background: ${({ theme }) => theme.colors.main600};
  box-shadow: ${({ theme }) => theme.boxShadow.md};

  margin-top: 12px;
  width: fit-content;
  padding: 10px 20px;
  font-size: 16px;
  height: 36px;

  color: ${({ theme }) => theme.colors.main0};

  @media (hover: hover) {
    &:hover {
      background: ${({ theme }) => theme.colors.main700};
    }
  }
  &:active {
    transform: scale(0.98);
  }

  gap: 8px;
  border-radius: 8px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.4px;
  transition: all 0.2s ease;
`;
