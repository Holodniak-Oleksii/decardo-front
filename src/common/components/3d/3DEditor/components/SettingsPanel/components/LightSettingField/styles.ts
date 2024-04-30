import styled from "styled-components";

export const Row = styled.div`
  ${({ theme }) => theme.flex.row};
  gap: 8px;
  width: 100%;
  padding: 8px 0;
`;

export const Name = styled.div`
  color: ${({ theme }) => theme.colors.main0};
  font-size: 12px;
  white-space: nowrap;
  text-align: left;
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.main100};
  background-color: ${({ theme }) => theme.colors.main700};
  padding: 5px 8px;
  border-radius: 2px;
  transition: 0.2s ease;
  outline: none;
  border: none;
  width: 40px;
  font-size: 12px;
  font-weight: 400;
  &::placeholder {
    color: ${({ theme }) => theme.colors.main10};
  }
`;

export const Container = styled.div`
  ${({ theme }) => theme.flex.column};
  gap: 16px;
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid #ffffff17;
  &:last-child {
    border-bottom: none;
  }
`;

export const Group = styled(Container)`
  padding: 0 0 0 16px;
  border-left: 1px solid #ffffff17;
  border-bottom: none;
`;
