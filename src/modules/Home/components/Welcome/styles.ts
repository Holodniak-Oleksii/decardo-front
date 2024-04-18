import styled, { keyframes } from "styled-components";

const floatingAnimation = keyframes`
  0%{
    transform: translate(0,0) ;
  }
  25%{
    transform: translate(5px, 10px) ;
  }
  50%{
    transform: translate(-5px,10px ) ;
  }
  75%{
    transform: translate(5px, -10px) ;
  }
  100%{
    transform: translate(0,0) ;
  }
`;
const colorsAnimation = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }

`;
export const Wrapper = styled.div`
  ${({ theme }) => theme.content.headerSpace};
  width: 100%;
  height: 100svh;
`;

export const Container = styled.div`
  ${({ theme }) => theme.content.mainContainerWidth}
  ${({ theme }) => theme.content.mainContainerPadding}
  height: 100%;
  display: flex;
`;

export const Content = styled.div`
  ${({ theme }) => theme.flex.between};
  ${({ theme }) => theme.content.indention};
  align-items: stretch;
  height: fit-content;
  margin: auto 0;
`;

export const ImageContainer = styled.div`
  width: calc(50% - 16px);
  flex-grow: 1;
  position: relative;
`;

export const ImageIndent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 600px;
  transform: translate(-50%, -50%);
  animation: ${colorsAnimation} 30s ease-out infinite;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    animation: ${floatingAnimation} 15s ease-out infinite;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: calc(50% - 16px);
`;

export const Title = styled.div`
  font-family: "Times New Roman", Times, serif;
  color: ${({ theme }) => theme.colors.main900};
  font-size: 60px;
  line-height: 1.2;
  font-weight: 700;
  position: relative;
  img {
    position: absolute;
    right: 0;
    top: 0;
    width: 72px;
    height: 72px;
    margin-left: 8px;
    object-fit: contain;
  }
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.colors.main200};
  font-size: 16px;
  line-height: 1.2;
  font-weight: 300;
  margin-bottom: 40px;
`;
