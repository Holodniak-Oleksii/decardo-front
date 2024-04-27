import styled from "styled-components";

export const Row = styled.div`
  ${({ theme }) => theme.flex.row};
  min-height: 44px;
  padding: 10px 16px;
  gap: 10px;
  cursor: pointer;
  span {
    color: ${({ theme }) => theme.colors.gray800};
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
  }
  @media (hover: hover) {
    transition: all 0.4s ease;
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray100};
    }
  }
`;
