import styled from "styled-components";

export const Mask = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  padding: 8px;
  z-index: 1;
  transition: all 0.2s ease-in-out;
`;

export const Relative = styled.div`
  position: relative;
  height: 100%;
  width: auto;
`;

export const Container = styled.div`
  position: sticky;
  left: 0;
  top: 0;
  pointer-events: all;
  ${({ theme }) => theme.flex.column};
  gap: 16px;
`;

export const Button = styled.button`
  ${({ theme }) => theme.flex.center};
  height: 44px;
  width: 44px;
  border-radius: 50%;
  background: #252532;
  -webkit-box-shadow: inset 0px 5px 10px 0px #16151c, 0px 3px 6px -2px #403f4e;
  box-shadow: inset 0px 5px 10px 0px #16151c, 0px 3px 6px -2px #403f4e;
  border: 1px solid #32303e;
  padding: 6px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: all 0.2s ease-in-out;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:active {
    transform: scale(0.95);
  }
`;
