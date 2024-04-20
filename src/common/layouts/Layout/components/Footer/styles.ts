import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin-bottom: 24px;
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.content.indention};
  background-color: ${({ theme }) => theme.colors.main900};
  width: 100%;
`;

export const Container = styled.div`
  ${({ theme }) => theme.content.mainContainerWidth}
  ${({ theme }) => theme.content.mainContainerPadding}
  ${({ theme }) => theme.flex.column};
  gap: 32px;
  height: 100%;
`;

export const Welcome = styled.div`
  ${({ theme }) => theme.flex.column};
  gap: 18px;
  max-width: 300px;
`;

export const CompanyLabel = styled.div`
  ${({ theme }) => theme.flex.row};
  gap: 8px;
`;

export const Name = styled.div`
  color: ${({ theme }) => theme.colors.main0};
  font-size: 32px;
  font-weight: 800;
`;

export const Watchword = styled.div`
  color: ${({ theme }) => theme.colors.main0};
  font-size: 16px;
  line-height: 1.5;
  font-weight: 300;
`;

export const Logo = styled.div`
  height: 40px;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.colors.main0};
  font-size: 32px;
  font-weight: 900;
  padding: 6px;
  ${({ theme }) => theme.flex.center};
  color: ${({ theme }) => theme.colors.main900};
  border-radius: 4px;
  cursor: pointer;
  span {
    font-size: 10px;
    height: 100%;
  }
`;

export const List = styled.ul`
  ${({ theme }) => theme.flex.column};
  gap: 32px;
`;

export const NavTitle = styled.div`
  color: ${({ theme }) => theme.colors.main0};
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 10px;
`;

export const NavItem = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.colors.main0};
  font-size: 16px;
  font-weight: 300;
`;

export const SocialList = styled.div`
  ${({ theme }) => theme.flex.row};
  gap: 20px;
  margin-top: auto;
`;

export const Line = styled.hr`
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.main600};
`;

export const Terms = styled.div`
  ${({ theme }) => theme.flex.between};
  width: 100%;
  gap: 16px;
`;

export const Text = styled.div`
  font-size: 14px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.main100};
`;
