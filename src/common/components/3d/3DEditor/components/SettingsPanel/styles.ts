import styled from "styled-components";

export const Wrapper = styled.div`
  pointer-events: all;
  position: sticky;
  top: 8px;
  right: 0;
  width: 100vw;
  max-width: 300px;
  ${({ theme }) => theme.flex.column};
`;

export const Body = styled.div`
  ${({ theme }) => theme.flex.column};
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
  background: ${({ theme }) => theme.colors.main900};
  border-radius: 8px;
`;
export const Absolute = styled.div`
  position: absolute;
  pointer-events: none;
  width: auto;
  top: 0;
  right: 8px;
  height: 100%;
  z-index: 3;
`;

export const Relative = styled.div`
  position: relative;
  height: 100%;
  width: auto;
  pointer-events: none;
`;

export const Head = styled.div`
  position: relative;
  padding: 8px 0;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const FilterButton = styled.div`
  ${({ theme }) => theme.flex.center};
  margin-left: auto;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: #252532;
  box-shadow: inset 0px 5px 10px 0px #16151c;
  border: 1px solid #32303e;
  padding: 6px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: all 0.2s ease-in-out;

  &:active {
    transform: scale(0.95);
  }
`;
