import styled, { css } from "styled-components";
import { ISimpleInputComponentProps } from "./types";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.column};
  position: relative;
`;

export const Component = styled.input<ISimpleInputComponentProps>`
  color: ${({ theme }) => theme.colors.gray800};
  ${({ theme }) =>
    css`
      border: 1px solid ${theme.colors.gray200};

      &:focus {
        border: 1px solid ${theme.colors.gray300};
      }
    `};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }
  &:disabled {
    color: ${({ theme }) => theme.colors.gray300};
    border: 1px solid ${({ theme }) => theme.colors.gray300};
  }

  padding: 12px 16px;
  border-radius: 6px;
  transition: 0.2s ease;
  height: 32px;
  background: #fff;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  width: 100%;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
`;
