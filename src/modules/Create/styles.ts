import styled, { css } from "styled-components";
import { IScreenShotProps } from "./types";

export const Wrapper = styled.div`
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
`;

export const Container = styled.div`
  ${({ theme }) => theme.content.mainContainerWidth}
  ${({ theme }) => theme.content.mainContainerPadding}
  ${({ theme }) => theme.flex.column};
`;

export const ScreenShot = styled.div<IScreenShotProps>`
  background: ${({ theme }) => theme.colors.main10};
  ${({ url }) =>
    url &&
    css`
      background-image: url(${url});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    `}
  width: 40%;
  min-width: 200px;
  max-width: 500px;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
`;

export const Form = styled.form`
  flex-grow: 1;
  max-width: calc(60% - 24px);
  ${({ theme }) => theme.flex.column}
  gap: 4px;
`;

export const View = styled.div`
  background: ${({ theme }) => theme.colors.main10};
  ${({ theme }) => theme.flex.center}

  width: 100%;
  height: 90svh;
  min-height: 500px;
  position: relative;
`;
