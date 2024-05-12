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
  max-height: 812px;
  min-height: 420px;
  @media screen and (max-width: 767px) {
    height: fit-content;
    min-height: 600px;
  }
`;

export const Container = styled.div`
  ${({ theme }) => theme.content.mainContainerWidth}
  ${({ theme }) => theme.content.mainContainerPadding}
  height: 100%;
  display: flex;
  @media screen and (max-width: 767px) {
    overflow: hidden;
    padding: 60px 16px;
  }
  @media screen and (max-width: 540px) {
    padding: 60px 16px;
  }
`;

export const Content = styled.div`
  ${({ theme }) => theme.flex.between};
  ${({ theme }) => theme.content.indention};
  align-items: stretch;
  height: fit-content;
  margin: auto 0;
  position: relative;
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
    ${({ theme }) => theme.flex.center};
  }
`;

export const ImageContainer = styled.div`
  width: calc(50% - 16px);
  flex-grow: 1;
  position: relative;
  @media screen and (max-width: 1512px) {
    width: calc(40% - 16px);
  }
  @media screen and (max-width: 1024px) {
    width: calc(35% - 16px);
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
  }
`;

export const Relative = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
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

  @media screen and (max-width: 1512px) {
    height: 500px;
  }
  @media screen and (max-width: 1280px) {
    height: 400px;
  }

  @media screen and (max-width: 767px) {
    height: 600px;
    width: 180%;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: calc(50% - 16px);
  @media screen and (max-width: 1512px) {
    width: calc(60% - 16px);
  }
  @media screen and (max-width: 1024px) {
    width: calc(65% - 16px);
    button {
      font-size: 14px;
      padding: 12px 18px;
      svg {
        width: 16px;
        height: 16px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    width: calc(100% - 32px);
    padding: 32px 16px;

    align-items: center;
    max-width: 500px;
    justify-content: center;
    z-index: 1;
    background: #ffffffd8;
    backdrop-filter: blur(2px);
    box-shadow: ${({ theme }) => theme.boxShadow.xs};
    gap: 20px;

    * {
      text-align: center;
    }
  }
`;

export const Title = styled.div`
  font-family: "Times New Roman", Times, serif;
  color: ${({ theme }) => theme.colors.main900};
  font-size: 60px;
  line-height: 1.2;
  font-weight: 700;
  position: relative;
  width: fit-content;
  padding-right: 80px;
  img {
    position: absolute;
    right: 0;
    top: 0;
    width: 72px;
    height: 72px;
    margin-left: 8px;
    object-fit: contain;
  }

  @media screen and (max-width: 1512px) {
    font-size: 52px;
    padding-right: 60px;
    img {
      width: 54px;
      height: 54px;
    }
  }
  @media screen and (max-width: 1280px) {
    font-size: 44px;
    padding-right: 44px;
    img {
      width: 40px;
      height: 40px;
    }
  }
  @media screen and (max-width: 1024px) {
    font-size: 32px;
    padding-right: 30px;
    img {
      width: 24px;
      height: 24px;
    }
  }
  @media screen and (max-width: 767px) {
    font-size: 24px;
    padding-right: 0;
    text-shadow: 0px 0px 1px #000000;

    img {
      width: 16px;
      height: 16px;
    }
  }
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.colors.main200};
  font-size: 16px;
  line-height: 1.2;
  font-weight: 300;
  margin-bottom: 40px;
  @media screen and (max-width: 1280px) {
    font-size: 14px;
  }
  @media screen and (max-width: 767px) {
    font-size: 12px;
    margin-bottom: 16px;
  }
`;
