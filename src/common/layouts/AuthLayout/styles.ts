import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.center};
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  margin: auto;
`;

export const Background = styled.div`
  position: absolute;
  width: 300%;
  height: 150%;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 767px) {
    height: 400%;
  }
  @media screen and (max-width: 540px) {
    width: 500%;
  }
`;

export const Content = styled.div`
  background: ${({ theme }) => theme.colors.main0};
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
  ${({ theme }) => theme.flex.column};
  gap: 32px;
  height: fit-content;
  width: 100%;
  max-width: 500px;
  position: relative;
  margin: auto;
  z-index: 2;
  border-radius: 12px;
  padding: 32px 24px 24px;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 32px 16px;
  ${({ theme }) => theme.flex.center};
`;

export const Head = styled.div`
  ${({ theme }) => theme.flex.center};
  width: 100%;
`;

export const Logo = styled.div`
  height: 40px;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.colors.main900};
  font-size: 32px;
  font-weight: 900;
  padding: 6px;
  ${({ theme }) => theme.flex.center};
  color: ${({ theme }) => theme.colors.main0};
  border-radius: 4px;
  cursor: pointer;
  span {
    font-size: 10px;
    height: 100%;
  }
`;

export const CompanyLabel = styled.div`
  ${({ theme }) => theme.flex.row};
  gap: 8px;
`;

export const Name = styled.div`
  color: ${({ theme }) => theme.colors.main900};
  font-size: 32px;
  font-weight: 800;
`;
