import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px 0 0 24px;
  cursor: pointer;
  @media (hover: hover) {
    &:hover {
      .preview {
        transform: scale(1.05);
      }
    }
  }
  @media screen and (max-width: 1512px) {
    padding: 20px 0 0 20px;
  }
  @media screen and (max-width: 1024px) {
    padding: 16px 0 0 16px;
  }
  @media screen and (max-width: 540px) {
    padding: 16px 0 0 0;
  }
  @media screen and (max-width: 440px) {
    padding: 16px 0 0 16px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px 24px 0 24px;
  border-radius: 12px;
  position: relative;
  transition: all 0.4s ease;
  border: 1px solid ${({ theme }) => theme.colors.main600};
  @media screen and (max-width: 1512px) {
    padding: 20px 20px 0 20px;
  }
  @media screen and (max-width: 1024px) {
    padding: 16px 16px 0 16px;
  }
`;

export const ContainerLoader = styled(Container)`
  border: 1px solid ${({ theme }) => theme.colors.main100};
`;

export const Glossiness = styled.div`
  transform: translate(-48px, -48px);
  width: calc(100% + 48px);
  height: 200px;
  position: relative;
  border-radius: 12px;
  border: 1px solid #cbcbcb5b;
  overflow: hidden;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.main600};
  @media screen and (max-width: 1512px) {
    transform: translate(-40px, -40px);
    width: calc(100% + 40px);
  }
  @media screen and (max-width: 1024px) {
    transform: translate(-32px, -32px);
    width: calc(100% + 32px);
  }
  @media screen and (max-width: 767px) {
    height: 180px;
  }
  @media screen and (max-width: 540px) {
    height: 160px;
    transform: translate(0, -32px);
    width: 100%;
  }
  @media screen and (max-width: 440px) {
    height: 180px;
    transform: translate(-32px, -32px);
    width: calc(100% + 32px);
  }
`;

export const GlossinessLoader = styled(Glossiness)`
  background: ${({ theme }) => theme.colors.main10};
  border: 1px solid ${({ theme }) => theme.colors.main100};
`;

export const Preview = styled.img`
  height: 100%;
  width: 100%;
  position: relative;
  object-fit: cover;
  z-index: -1;
  transition: all 0.4s ease;
`;

export const Flex = styled.div`
  ${({ theme }) => theme.flex.row};
  position: relative;
`;

export const Information = styled.div`
  ${({ theme }) => theme.flex.column};
  width: 100%;
  gap: 8px;
  transform: translateY(-24px);
  @media screen and (max-width: 1512px) {
    transform: translateY(-20px);
  }
  @media screen and (max-width: 1024px) {
    transform: translateY(-16px);
  }
`;

export const Title = styled.div`
  ${({ theme }) => theme.text.getLineClamp(2)};
  font-size: 18px;
  line-height: 1.2;
  font-weight: 600;
  width: 100%;
  @media screen and (max-width: 1512px) {
    font-size: 16px;
  }
`;
export const TitleLoader = styled(Title)`
  height: 20px;
  background: ${({ theme }) => theme.colors.main10};
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.2;
  padding: 0;
  ${({ theme }) => theme.text.getLineClamp(3)};
`;

export const DescriptionLoader = styled(Description)`
  height: 40px;
  background: ${({ theme }) => theme.colors.main10};
`;

export const TagList = styled.div`
  ${({ theme }) => theme.flex.row};
  flex-wrap: wrap;
  width: 100%;
  gap: 8px;
  @media screen and (max-width: 767px) {
    gap: 6px;
  }
`;

export const Tags = styled.div`
  background-color: ${({ theme }) => theme.colors.main800};
  color: ${({ theme }) => theme.colors.main0};
  padding: 2px 6px;
  font-size: 12px;
  white-space: nowrap;
  border-radius: 4px;
`;

export const TagsLoader = styled(Tags)`
  background: ${({ theme }) => theme.colors.main10};
  height: 18px;
  min-width: 60px;
`;
