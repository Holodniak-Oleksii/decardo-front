import styled from "styled-components";

export const Overlay = styled.div`
  ${({ theme }) => theme.flex.center}
  background-color: ${({ theme }) => theme.colors.main0};
  position: fixed;
  width: 100%;
  height: 100%;
  opacity: 1;
  left: 0;
  top: 0;
  z-index: 100000;
`;
