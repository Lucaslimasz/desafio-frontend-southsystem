import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 110px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Wellcome = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 150px;
  }

  p {
    font-size: 18px;
    color: #ffffff;
    margin-left: 30px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  margin-left: 24px;
  background: #ffffff;
  border-radius: 8px;
  padding: 13px 16px;
  cursor: pointer;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(90%);
  }
`;
