import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.column};
  gap: 8px;
  width: 100%;
  min-height: min-content;
  @media screen and (max-width: 1280px) {
    gap: 4px;
  }
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.main900};
  font-size: 28px;
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 12px;

  @media screen and (max-width: 1280px) {
    margin-bottom: 8px;
  }
  @media screen and (max-width: 767px) {
    font-size: 24px;
  }
`;

export const List = styled.div`
  ${({ theme }) => theme.flex.row};
  gap: 12px;
`;

export const Tag = styled.div`
  background: ${({ theme }) => theme.colors.main900};
  color: ${({ theme }) => theme.colors.main0};
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.colors.main900};
  font-weight: 300;
  line-height: 1.5;
  font-size: 16px;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;
