import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  overflow: hidden;
  position: relative;
  min-height: 100svh;
`;

export const Container = styled.div`
  width: 100%;
  padding-top: 80px;
`;

export const Content = styled.div`
  ${({ theme }) => theme.content.mainContainerWidth}
  ${({ theme }) => theme.content.mainContainerPadding}
  ${({ theme }) => theme.flex.column}
`;

export const Details = styled.div`
  ${({ theme }) => theme.flex.between}
  width: 100%;
  gap: 16px;
  margin-top: 24px;
`;

export const Information = styled.div`
  ${({ theme }) => theme.flex.column};
  gap: 16px;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.text.getLineClamp(2)}
  font-size: 32px;
  font-weight: 700;
  line-height: 1;
`;

export const View = styled.div`
  width: 100%;
  height: 60svh;
  min-height: 500px;
  background: ${({ theme }) => theme.colors.main10};
`;
