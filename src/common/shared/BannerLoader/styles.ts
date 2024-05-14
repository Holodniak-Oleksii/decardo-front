import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => theme.flex.center};
  position: relative;
  padding: 16px;
  height: 100%;
  min-height: 400px;
  width: 100%;
  font-size: : 32px;
`;
