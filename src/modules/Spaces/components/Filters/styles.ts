import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.row}
  width: 100%;
  gap: 16px;
  .form_item {
    min-height: auto;
    &:first-child {
      width: 100%;
    }
    &:last-child {
      width: 360px;
    }
  }
`;
