import { IError } from "@/common/types";
import { ArrowIconWrapper } from "@/ui-liberty/inputs/Select/styles";
import styled, { css } from "styled-components";

export const Wrapper = styled.div<IError>`
  ${({ theme }) => theme.flex.row};
  ${({ theme, error }) =>
    error
      ? css`
          border: 1px solid ${theme.colors.error600};
        `
      : css`
          border: 1px solid ${theme.colors.gray200};
        `};

  border-radius: 8px;
  cursor: pointer;
  background: #fff;
  gap: 8px;
  height: 44px;
  padding: 0 16px;
  position: relative;

  span {
    color: ${({ theme }) => theme.colors.gray800};
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
  }
`;

export const Tags = styled.div`
  ${({ theme }) => theme.flex.row};
  width: calc(100% - 70px);
  height: 100%;
  gap: 8px;
  overflow: hidden;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const Tag = styled.div`
  color: ${({ theme }) => theme.colors.main0};
  ${({ theme }) => theme.flex.center};
  background: ${({ theme }) => theme.colors.main900};
  border-radius: 5px;
  padding: 6px 8px;
  gap: 6px;
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  white-space: nowrap;
  height: 30px;
`;

export const IndicatorImageWrapper = styled(ArrowIconWrapper)`
  position: relative;
  top: auto;
  transform: none;
  right: auto;
`;

export const Close = styled.button`
  width: 10px;
  height: 10px;
  position: relative;
  &::after,
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: center;
    width: 1px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.main0};
  }
  &::after {
    transform: translate(-50%, -50%) rotateZ(45deg);
  }
  &::before {
    transform: translate(-50%, -50%) rotateZ(-45deg);
  }
`;

export const Count = styled.div`
  ${({ theme }) => theme.flex.center};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.main900};
  color: ${({ theme }) => theme.colors.main0};

  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.28px;
  padding: 4px 7px;
  gap: 4px;
  button {
    &::after,
    &::before {
      background-color: #fff;
    }
  }
`;

export const Indicator = styled.div`
  ${({ theme }) => theme.flex.center};
  gap: 4px;
  margin-left: auto;
`;
