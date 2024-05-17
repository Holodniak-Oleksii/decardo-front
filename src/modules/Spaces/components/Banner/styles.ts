import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
  ${({ theme }) => theme.flex.column};
  justify-content: flex-end;
  filter: grayscale(1);
  transition: all 0.4s ease-out;
  padding-top: 200px;
  @media screen and (hover: hover) {
    &:hover {
      filter: grayscale(0);
    }
  }
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  div {
    width: 100%;
  }
`;

export const Content = styled.div`
  ${({ theme }) => theme.flex.column};
  background-color: ${({ theme }) => theme.colors.main0};
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 24px;
  @media screen and (max-width: 1024px) {
    padding: 16px;
  }
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.colors.main900};
  font-weight: 300;
  line-height: 1.5;
  font-size: 16px;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.main900};
  font-size: 28px;
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 12px;
  @media screen and (max-width: 1024px) {
    font-size: 24px;
  }
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`;
