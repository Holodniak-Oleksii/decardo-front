import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.center};
  color: ${({ theme }) => theme.colors.main900};
  flex: 1 1 auto;
  width: 100%;
  min-height: 400px;
  font-size: 32px;
  padding: 16px;
`;
