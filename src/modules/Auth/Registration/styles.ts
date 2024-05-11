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
export const Label = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.main900};
  font-size: 14px;
  line-height: 1.2;
  a {
    color: ${({ theme }) => theme.colors.main900};
    font-weight: 800;
    text-decoration: underline;
  }
`;
