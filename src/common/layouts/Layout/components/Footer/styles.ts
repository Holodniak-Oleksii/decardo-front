import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 16px;
  @media screen and (max-width: 540px) {
    gap: 12px;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin-bottom: 24px;
  @media screen and (max-width: 767px) {
    margin-bottom: 16px;
  }
  @media screen and (max-width: 540px) {
    margin-bottom: 0;
  }
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
  @media screen and (max-width: 767px) {
    gap: 24px;
  }
`;

export const Welcome = styled.div`
  ${({ theme }) => theme.flex.column};
  gap: 18px;
  max-width: 300px;
  @media screen and (max-width: 1024px) {
    max-width: 100%;
  }
  @media screen and (max-width: 767px) {
    gap: 12px;
  }
`;

export const CompanyLabel = styled.div`
  ${({ theme }) => theme.flex.row};
  gap: 8px;
`;

export const Name = styled.div`
  color: ${({ theme }) => theme.colors.main0};
  font-size: 32px;
  font-weight: 800;
  @media screen and (max-width: 1024px) {
    font-size: 24px;
  }
`;

export const Watchword = styled.div`
  color: ${({ theme }) => theme.colors.main0};
  font-size: 16px;
  line-height: 1.5;
  font-weight: 300;
  margin-bottom: 16px;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
  @media screen and (max-width: 540px) {
    margin-bottom: 8px;
  }
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
  @media screen and (max-width: 1024px) {
    height: 32px;
    font-size: 24px;
    span {
      font-size: 8px;
    }
  }
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
  flex-wrap: wrap;
  width: 100%;
  gap: 16px;
  @media screen and (max-width: 767px) {
    gap: 12px;
  }
`;

export const Text = styled.div`
  font-size: 14px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.main100};
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;
