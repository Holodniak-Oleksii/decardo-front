import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.main0};
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
  position: relative;
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  button {
    * {
      stroke: ${({ theme }) => theme.colors.main0};
    }
  }
`;

export const Content = styled.div`
  ${({ theme }) => theme.flex.center};
  background: #f9f9f9;
  flex-direction: column;
  margin: auto;
  gap: 24px;
  width: 100%;
  height: 100%;
  min-height: 300px;
  padding: 16px;
  border-radius: 8px;
  @media screen and (max-width: 767px) {
    gap: 16px;
    button {
      font-size: 14px;
      padding: 8px 12px;
    }
  }
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  max-width: 400px;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;
