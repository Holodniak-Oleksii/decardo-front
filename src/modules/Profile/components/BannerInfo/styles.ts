import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${({ theme }) => theme.colors.main10};
  position: relative;
`;

export const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: all 0.3s ease;
  background-image: linear-gradient(
    to bottom,
    transparent 46%,
    rgba(12, 13, 19, 0.5) 60%,
    rgba(12, 13, 19) 97%
  );
`;

export const Content = styled.div`
  ${({ theme }) => theme.content.mainContainerWidth}
  ${({ theme }) => theme.content.mainContainerPadding}
  ${({ theme }) => theme.flex.row}
  gap: 32px;
  position: relative;
  height: 100%;
  img {
    filter: grayscale(1);
    object-fit: cover;
    object-position: top;
  }
`;

export const Flex = styled.div`
  position: relative;
  ${({ theme }) => theme.flex.row}
  gap: 32px;
  width: 100%;
  height: 100%;
`;

export const Row = styled.div`
  ${({ theme }) => theme.flex.column};
  justify-content: flex-end;
  height: 100%;
  gap: 6px;
  flex-grow: 1;
  padding: 24px 0;
`;

export const Title = styled.div`
  ${({ theme }) => theme.text.getLineClamp(2)}
  color: ${({ theme }) => theme.colors.main0};
  position: relative;
  font-size: 38px;
  line-height: 1.4;
  font-weight: 400;
  padding-right: 32px;
`;

export const Text = styled.div`
  font-size: 16px;
  line-height: 1.4;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.main0};
  ${({ theme }) => theme.text.overflow}
  ${({ theme }) => theme.flex.row}
gap: 6px;
`;

export const Logout = styled.button`
  margin-left: 10px;
`;

export const Setting = styled(Link)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  svg {
    width: 28px;
    height: 28px;
  }
`;
