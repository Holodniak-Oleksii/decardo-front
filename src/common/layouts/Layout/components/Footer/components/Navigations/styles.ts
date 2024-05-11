import styled from "styled-components";

export const List = styled.ul`
  ${({ theme }) => theme.flex.column};
  gap: 32px;
  @media screen and (max-width: 1024px) {
    gap: 28px;
  }
  @media screen and (max-width: 767px) {
    gap: 16px;
  }
  @media screen and (max-width: 540px) {
    gap: 12px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const NavTitle = styled.div`
  color: ${({ theme }) => theme.colors.main0};
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 10px;

  @media screen and (max-width: 767px) {
    font-size: 16px;
    margin-bottom: 4px;
  }

  @media screen and (max-width: 540px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.colors.main0};
  font-size: 16px;
  font-weight: 300;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;
