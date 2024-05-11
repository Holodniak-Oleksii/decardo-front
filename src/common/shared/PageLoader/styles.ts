import { TransitionStatus } from "react-transition-group";
import styled, { RuleSet, css } from "styled-components";
import { ITransitionsProps } from "./types";

export const overlayAnimation: Record<TransitionStatus, RuleSet> = {
  entering: css`
    opacity: 1;
  `,
  entered: css`
    opacity: 1;
  `,
  exiting: css`
    opacity: 0;
  `,
  exited: css`
    opacity: 0;
  `,
  unmounted: css`
    opacity: 0;
  `,
};

export const Overlay = styled.div<ITransitionsProps>`
  ${({ theme }) => theme.flex.center}
  background-color: ${({ theme }) => theme.colors.main0};
  position: fixed;
  width: 100%;
  height: 100%;
  opacity: 1;
  left: 0;
  top: 0;
  z-index: 100000;
  transition: opacity 300ms;

  ${({ transitionState }) => overlayAnimation[transitionState]}
`;
