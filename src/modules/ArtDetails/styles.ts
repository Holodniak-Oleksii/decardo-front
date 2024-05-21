import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  min-height: 100svh;
`;

export const Container = styled.div`
  width: 100%;
  padding-top: 80px;
`;

export const Content = styled.div`
  ${({ theme }) => theme.content.mainContainerWidth}
  ${({ theme }) => theme.content.mainContainerPadding}
  ${({ theme }) => theme.flex.column}
`;

export const Details = styled.div`
  ${({ theme }) => theme.flex.column}
  width: 100%;
  gap: 16px;
  margin-top: 24px;
  padding-bottom: 40px;
`;

export const View = styled.div`
  background: ${({ theme }) => theme.colors.main10};
  width: 100%;
  height: 60svh;
  min-height: 500px;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.colors.main10};
`;

export const Mask = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  padding: 16px;
  z-index: 2;
  transition: all 0.2s ease-in-out;
`;

export const ActionButton = styled.button`
  ${({ theme }) => theme.flex.row};
  height: 100%;
  gap: 6px;
  margin-right: auto;
  position: relative;

  svg {
    height: 32px;
    width: 32px;
  }
`;

export const Text = styled.div`
  ${({ theme }) => theme.text.getLineClamp(2)}
  flex-grow: 1;
  font-size: 32px;
  font-weight: 700;
  line-height: 1;
`;

export const Title = styled.div`
  ${({ theme }) => theme.flex.row};
  gap: 16px;
`;

export const Tags = styled.div`
  ${({ theme }) => theme.flex.row};
  flex-wrap: wrap;
  gap: 6px;
  width: 100%;
`;

export const Tag = styled.div`
  background: ${({ theme }) => theme.colors.main900};
  color: ${({ theme }) => theme.colors.main0};
  font-size: 12px;
  line-height: normal;
  white-space: nowrap;
  padding: 4px 8px;
  border-radius: 4px;
`;

export const Description = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.main900};
  margin-bottom: 24px;
`;

export const Owner = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: ${({ theme }) => theme.colors.main500};
  font-style: italic;
`;

export const Relative = styled.div`
  position: relative;
  height: 100%;
  width: auto;
`;

export const Overlay = styled.div`
  position: sticky;
  left: 0;
  top: 0;
  pointer-events: all;
  width: fit-content;
  ${({ theme }) => theme.flex.column};
  gap: 16px;
`;

export const Button = styled.button`
  ${({ theme }) => theme.flex.center};
  height: 44px;
  width: 44px;
  border-radius: 50%;
  background: #252532;
  -webkit-box-shadow:
    inset 0px 5px 10px 0px #16151c,
    0px 3px 6px -2px #403f4e;
  box-shadow:
    inset 0px 5px 10px 0px #16151c,
    0px 3px 6px -2px #403f4e;
  border: 1px solid #32303e;
  padding: 6px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: all 0.2s ease-in-out;
  pointer-events: all;
  z-index: 4;

  &:active {
    transform: scale(0.95);
  }
`;

export const List = styled.div`
  width: 100%;
  display: grid;
  gap: 42px;
  grid-template-columns: repeat(4, calc(25% - 32px));
  position: relative;
  @media screen and (max-width: 1620px) {
    gap: 32px;
    grid-template-columns: repeat(3, calc(33.3% - 21px));
  }
  @media screen and (max-width: 1140px) {
    gap: 24px;
    grid-template-columns: repeat(3, calc(33.3% - 16px));
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, calc(50% - 13px));
  }
  @media screen and (max-width: 767px) {
    gap: 16px;
    grid-template-columns: repeat(2, calc(50% - 8px));
  }
  @media screen and (max-width: 440px) {
    grid-template-columns: 100%;
  }
`;
