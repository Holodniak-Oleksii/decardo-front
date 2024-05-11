import { IOpenable } from "@/common/types/general";
import styled, { css } from "styled-components";
import { IErrored } from "../../types";

export const Wrapper = styled.div<IOpenable & IErrored>`
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  box-shadow: ${({ theme }) => theme.boxShadow.xl};
  ${({ isOpen, unErrored }) =>
    !isOpen
      ? css`
          opacity: 0;
          visibility: hidden;
          transform: translateY(
            ${!unErrored ? `calc(100% - 18px)` : `calc(100% + 2px)`}
          );
          pointer-events: none;
        `
      : css`
          transform: translateY(
            ${!unErrored ? `calc(100% - 10px)` : `calc(100% + 10px)`}
          );
        `}

  transition: all 0.2s ease-out;
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 3;
  border-radius: 8px;
  background: #fff;
  overflow: hidden;
`;

export const SearchWrapper = styled.div`
  ${({ theme }) => theme.flex.row};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};

  width: 100%;
  padding: 0 16px;
  img {
    margin-left: auto;
  }
`;

export const Search = styled.input`
  outline: none;
  height: 44px;
  width: calc(100% - 34px);
  gap: 10px;
  background: #fff;
  border: none;
  font-size: 14px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
  }
`;

export const List = styled.div`
  ${({ theme }) => theme.flex.column};
  max-height: 220px;
  overflow: hidden;
  overflow-y: auto;
`;

export const NotFound = styled.div`
  color: ${({ theme }) => theme.colors.gray400};
  ${({ theme }) => theme.flex.center};

  height: 100px;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
`;
