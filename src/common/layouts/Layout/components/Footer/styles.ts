import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.content.headerSpace};
  background-color: ${({ theme }) => theme.colors.main900};
  width: 100%;
  height: 400px;
`;

export const Container = styled.div`
  ${({ theme }) => theme.content.mainContainerWidth}
  ${({ theme }) => theme.content.mainContainerPadding}
  height: 100%;
  display: flex;
`;
