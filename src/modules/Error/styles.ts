import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => theme.content.headerSpace};
  width: 100%;
`;

export const Content = styled.div`
  ${({ theme }) => theme.content.mainContainerWidth}
  ${({ theme }) => theme.content.mainContainerPadding}
  display: flex;
  min-height: 80svh;
`;

export const ActionContainer = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
  width: 100%;
  max-width: 600px;
  height: 80%;
  margin: auto;
  border-radius: 12px;
  padding: 24px;
  ${({ theme }) => theme.flex.column}
  align-items: center;
  gap: 32px;
`;
