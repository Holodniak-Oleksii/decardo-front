import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.row};
  gap: 24px;
  margin-left: auto;
`;

export const Avatar = styled.div`
  ${({ theme }) => theme.flex.center};
  background: ${({ theme }) => theme.colors.main900};
  border: 2px solid ${({ theme }) => theme.colors.main400};
  cursor: pointer;

  height: 44px;
  width: 44px;
  border-radius: 50%;
  position: relative;
  span {
    color: ${({ theme }) => theme.colors.main0};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Create = styled.button`
  ${({ theme }) => theme.flex.center};
  svg {
    height: 36px;
    width: 36px;
  }
`;
