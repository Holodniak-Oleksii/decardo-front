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

export const List = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  gap: 42px;
  grid-template-columns: repeat(4, calc(25% - 32px));
  position: relative;
  @media screen and (max-width: 1620px) {
    gap: 32px;
    grid-template-columns: repeat(3, calc(33.3% - 21px));
  }
  @media screen and (max-width: 1140px) {
    gap: 24px;
    grid-template-columns: repeat(3, calc(33.3% - 16px));
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, calc(50% - 13px));
  }
  @media screen and (max-width: 767px) {
    gap: 16px;
    grid-template-columns: repeat(2, calc(50% - 8px));
  }
  @media screen and (max-width: 440px) {
    grid-template-columns: 100%;
  }
`;
