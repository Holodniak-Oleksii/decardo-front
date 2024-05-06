import { IActiveble } from "@/common/types";
import styled, { css } from "styled-components";

export const columnSize = css`
  width: 100%;
  max-width: 320px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

export const Container = styled.div`
  ${({ theme }) => theme.flex.column}
  gap: 40px;
  width: 100%;
  min-height: calc(100svh + 400px);
  padding-bottom: 40px;
  padding-top: 64px;
`;

export const Content = styled.div`
  ${({ theme }) => theme.content.mainContainerWidth}
  ${({ theme }) => theme.content.mainContainerPadding}
  ${({ theme }) => theme.flex.row}
  gap: 24px;
  position: relative;
  gap: 32px;
  height: 100%;
`;

export const Column = styled.div`
  ${({ theme }) => theme.flex.column}
  gap: 24px;
  flex-grow: 1;
`;

export const List = styled.div`
  display: grid;
  position: relative;
  gap: 40px;
  grid-template-columns: repeat(2, calc(50% - 20px));
`;

export const Indent = styled.div`
  ${columnSize}
`;

export const Tabs = styled.div`
  ${({ theme }) => theme.flex.row}
  gap: 24px;
`;

export const Tab = styled.button<IActiveble>`
  min-width: 100px;
  text-align: center;
  font-size: 18px;
  padding: 6px 12px;
  transition: all 0.4s ease;
  border-bottom: 2px solid
    ${({ isActive, theme }) =>
      isActive ? theme.colors.main900 : theme.colors.main0};
`;
