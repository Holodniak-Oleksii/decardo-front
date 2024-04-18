import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.content.mainContainerWidth}
  ${({ theme }) => theme.content.mainContainerPadding}
`;

export const List = styled.div`
  ${({ theme }) => theme.content.indention};
  width: 100%;
  display: grid;
  gap: 38px;
  grid-template-columns: repeat(3, calc(33.3% - 25px));
  position: relative;
`;
