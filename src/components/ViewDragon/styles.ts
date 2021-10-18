import styled from "styled-components";

import Modal from "react-modal";

export const Container = styled(Modal)`
  background: #dedede;
  outline: 0;

  max-width: 450px;
  margin: 150px auto 0;
  border-radius: 8px;
  padding: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  > img {
    max-width: 250px;
    border-radius: 4px;
  }

  h1 {
    color: #131313;
    margin: 15px 0 2px;
    font-size: 28px;
  }
`;
