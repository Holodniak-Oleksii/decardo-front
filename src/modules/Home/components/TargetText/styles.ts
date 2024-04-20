import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.center};
  ${({ theme }) => theme.content.indention};

  width: 100%;
  height: 100svh;
  max-height: 800px;
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
`;

export const Content = styled.div`
  ${({ theme }) => theme.flex.column};
  justify-content: center;
  gap: 40px;
  width: calc(50% - 40px);
`;

export const ImageContainer = styled.div`
  flex-grow: 1;
  position: relative;
  min-width: 300px;
  width: 50%;
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
