import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Form = styled.form`
  ${({ theme }) => theme.flex.column};
  width: 100%;
`;

export const ActionContainer = styled.div`
  ${({ theme }) => theme.flex.column};
  width: 100%;
  gap: 8px;
  margin-top: 16px;
`;
