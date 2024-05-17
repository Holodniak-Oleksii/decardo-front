import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

export const Container = styled.div`
  ${({ theme }) => theme.content.headerSpace};
  width: 100%;
  min-height: 100svh;
  padding-bottom: 40px;
`;

export const Content = styled.div`
  ${({ theme }) => theme.content.mainContainerWidth}
  ${({ theme }) => theme.content.mainContainerPadding}
  ${({ theme }) => theme.flex.column}
  gap: 24px;
  height: 100%;
  display: flex;
`;

export const Form = styled.form`
  ${({ theme }) => theme.flex.column}
  gap: 24px;
`;

export const Row = styled.div`
  ${({ theme }) => theme.flex.row}
  align-items: stretch;
  gap: 24px;
  & > div {
    &:first-child {
      flex-grow: 1;
      height: auto;
      max-height: 375px;
      max-width: 300px;
    }
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    & > div {
      &:first-child {
        height: 300px;
        max-width: 300px;
      }
    }
  }
  @media screen and (max-width: 460px) {
    & > div {
      max-width: 100%;
    }
  }
`;

export const Column = styled.div`
  ${({ theme }) => theme.flex.column};
  flex-grow: 1;
`;
