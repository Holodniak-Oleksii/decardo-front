import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => theme.flex.center};
  position: relative;
  padding: 16px;
  height: 100%;
  min-height: 400px;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 400;
  line-height: 1.3;
  max-width: 500px;
  text-align: center;
`;
