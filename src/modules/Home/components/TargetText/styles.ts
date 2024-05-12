import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.center};
  ${({ theme }) => theme.content.indention};

  width: 100%;
  height: min-content;
  max-height: 812px;
`;

export const Container = styled.div`
  ${({ theme }) => theme.content.mainContainerWidth}
  ${({ theme }) => theme.content.mainContainerPadding}
  ${({ theme }) => theme.flex.row};
  align-items: stretch;
  gap: 32px;
  height: 100%;
  width: 100%;
  display: flex;
  min-height: min-content;
`;

export const Content = styled.div`
  ${({ theme }) => theme.flex.column};
  justify-content: center;
  gap: 40px;
  width: calc(50% - 40px);

  @media screen and (max-width: 1280px) {
    width: calc(65% - 40px);
    gap: 32px;
  }
  @media screen and (max-width: 1024px) {
    width: 50%;
    gap: 24px;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    gap: 60px;
  }
  @media screen and (max-width: 540px) {
    gap: 40px;
  }
`;

export const ImageContainer = styled.div`
  flex-grow: 1;
  position: relative;
  min-width: 300px;
  width: 50%;
  min-height: 400px;
  height: calc(100svh - 200px);
  max-height: 812px;
  @media screen and (max-width: 1280px) {
    width: 35%;
  }
  @media screen and (max-width: 1024px) {
    width: calc(50% - 40px);
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const ArtImage = styled(Image)`
  position: absolute;
  right: 0;
  top: 50%;
  object-fit: contain;
  transform: translateY(-50%);
  height: 100%;
  width: 100%;
`;
