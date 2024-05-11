import styled from "styled-components";
import { IErrored } from "./types";

export const Wrapper = styled.div<IErrored>`
  ${({ theme }) => theme.flex.column};
  position: relative;
  gap: 4px;
  ${({ unErrored }) => !unErrored && `min-height: 87px;`}
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
