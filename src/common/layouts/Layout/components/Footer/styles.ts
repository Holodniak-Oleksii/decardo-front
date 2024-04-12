import styled from "styled-components";

export const Wrapper = styled.footer`
  background-color: rgb(244, 244, 244);
  width: 100%;
  border-top: 1px solid #d0d5dd;
`;

export const Content = styled.div`
  ${({ theme }) => theme.content.mainContainerPadding};
  ${({ theme }) => theme.content.mainContainerWidth};
  width: 100%;
`;
