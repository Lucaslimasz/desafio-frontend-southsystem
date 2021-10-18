import styled from "styled-components";

export const Button = styled.button<{active?: boolean}>`
  width: 300px;
  padding: 18px 0;

  background: ${({active}) => active ? '#A9A9A9' : '#d90b1c'};
  border-radius: 8px;
  font-size: 17px;
  line-height: 18px;
  color: #f0f0f5;
  font-weight: bold;

  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(92%);
  }
`;
