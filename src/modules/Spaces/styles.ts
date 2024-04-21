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
  display: grid;
  gap: 38px;
  grid-template-columns: repeat(3, calc(33.3% - 25px));
  position: relative;
`;
