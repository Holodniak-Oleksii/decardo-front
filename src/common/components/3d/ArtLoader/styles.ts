import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 6;
  width: 300px;
  height: 300px;
  gap: 8px;
  span {
    font-size: 24px;
    line-height: 1;
    text-align: center;
  }
`;
