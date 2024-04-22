import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  overflow: hidden;
  position: relative;
  min-height: 100svh;
`;

export const Container = styled.div`
  ${({ theme }) => theme.content.headerSpace};
  width: 100%;
`;

export const Content = styled.div`
  ${({ theme }) => theme.content.mainContainerWidth}
  ${({ theme }) => theme.content.mainContainerPadding}
  ${({ theme }) => theme.flex.column}
`;
