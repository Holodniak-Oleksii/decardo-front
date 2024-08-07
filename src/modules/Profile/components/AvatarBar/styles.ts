import styled from "styled-components";
import { columnSize } from "../../styles";

export const Wrapper = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
  background-color: ${({ theme }) => theme.colors.main0};
  ${columnSize};
  position: absolute;
  top: 20%;
  left: 0;
  @media screen and (max-width: 767px) {
    position: relative;
    transform: translateY(40px);
  }
`;

export const Avatar = styled.div`
  width: 100%;
  position: relative;
  aspect-ratio: 7 / 9;
  background-color: ${({ theme }) => theme.colors.main10};
  border-bottom: 1px solid ${({ theme }) => theme.colors.main10};
  img {
    object-fit: cover;
  }
  @media screen and (max-width: 767px) {
    aspect-ratio: 1/1;
  }
`;

export const Container = styled.div`
  ${({ theme }) => theme.flex.column};
  gap: 16px;
  width: 100%;
  padding: 16px;
  @media screen and (max-width: 767px) {
    gap: 8px;
  }
`;

export const Label = styled.div`
  color: ${({ theme }) => theme.colors.main900};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
`;

export const Text = styled.div`
  ${({ theme }) => theme.flex.row};
  color: ${({ theme }) => theme.colors.main900};

  gap: 4px;
  font-size: 12px;
  line-height: 1.4;
  font-weight: 400;
`;

export const Redirect = styled.a`
  display: block;
  height: 18px;

  svg {
    height: 16px;
    width: 16px;
  }
`;
