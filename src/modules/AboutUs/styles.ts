import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: fit-content;
  overflow: hidden;
  position: relative;
`;

export const Container = styled.div`
  ${({ theme }) => theme.content.headerSpace};
  width: 100%;
  padding-bottom: 40px;
`;

export const Content = styled.div`
  ${({ theme }) => theme.content.mainContainerWidth}
  ${({ theme }) => theme.content.mainContainerPadding}
  ${({ theme }) => theme.flex.column}
  display: flex;
`;

export const Title = styled.div`
  font-size: 48px;
  width: 100%;
  font-weight: 700;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  color: ${({ theme }) => theme.colors.main900};
  @media screen and (max-width: 1280px) {
    font-size: 44px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 32px;
  }
  @media screen and (max-width: 767px) {
    font-size: 24px;
  }
`;

export const CardContainer = styled.div`
  ${({ theme }) => theme.flex.center};

  width: 100%;
  padding: 10px 0 60px 0;
  gap: 60px;
  position: relative;

  @media screen and (max-width: 1024px) {
    gap: 40px;
  }
  @media screen and (max-width: 767px) {
    gap: 32px;
  }
  @media screen and (max-width: 540px) {
    flex-direction: column;
    gap: 16px;
  }
`;
