import styled from "styled-components";

export const Controls = styled.div`
  ${({ theme }) => theme.flex.row};
  gap: 16px;
  margin-left: auto;
  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 32px 16px 16px 16px;
    filter: invert(1);
  }
`;
