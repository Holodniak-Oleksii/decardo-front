import styled from "styled-components";

export const Container = styled.div`
  border: 1px dashed ${({ theme }) => theme.colors.main900};
  border-radius: 8px;
  height: 300px;
  width: 100%;
  cursor: pointer;
  ${({ theme }) => theme.flex.center}
`;

export const ImagePreview = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
