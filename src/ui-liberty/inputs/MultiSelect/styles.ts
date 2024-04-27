import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.column};
  position: relative;
  gap: 4px;
  min-height: 87px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.gray600};
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
`;

export const Message = styled.span`
  color: ${({ theme }) => theme.colors.error600};
  font-size: 10px;
  margin-top: -2px;
  font-weight: 400;
  text-align: right;
`;
