import styled from "styled-components";
import ReactModal from "react-modal";

export const ModalStyle = styled(ReactModal)`
  background: red;

  width: 1130px;
  height: 520px;

  margin: 120px auto 0;

  background: #dedede;
  border-radius: 32px;
  outline: 0;

  padding: 55px;

  display: flex;
  align-items: center;

  div {
    width: 50%;
    p {
      font-size: 30px;
      color: #141414;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    >input {
      max-width: 350px;
      margin: auto;
      margin-bottom: 12px;
      &:last-child{
        margin-bottom: 20px;
      }
    }
    button, p {
      margin: auto;
      width: 100%;
      max-width: 350px;
    }
    p {
      font-size: 14px;
      margin-top: 10px;  
      color: red;
    }
  }
`;
