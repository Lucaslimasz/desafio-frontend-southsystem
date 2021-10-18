import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 100px;

  max-width: 1110px;
  margin: auto;
`;

export const Informations = styled.div`
  width: 100%;
  height: 100%;

  > h1 {
    font-weight: 500;
    font-size: 36px;
    color: #ffffff;
    margin: 30px 0 45px;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    tr {
      border-bottom: 1px solid #fff;
    }

    .principal {
      display: flex;
      align-items: center;
      font-weight: bold;
      img {
        margin-right: 16px;
      }
    }

    th,
    td {
      padding: 14px 0;

      text-align: left;
      font-weight: 500;
      font-size: 14px;
      text-transform: uppercase;

      color: #ffffff;
    }

    td {
      font-weight: 400;
      text-transform: none;
      button {
        background: none;
        &:last-child {
          margin-left: 10px;
        }
      }
      img {
        width: 40px;
        height: 40px;
        border-radius: 8px;
      }
    }
  }
`;
