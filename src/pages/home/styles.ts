import styled from 'styled-components';
import Dragon from '../../assets/dragon.png';

export const DragonImage = styled.div`
  width: 100%;
  height: 100vh;

  background-image: url(${Dragon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 0 120px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  >img {
    width: 302px;
  }

  h1 {
    font-weight: 500;
    font-size: 36px;
    margin: 30px 0;
    color: #fff;
  }

  >div {
    display: flex;
    align-items: center;
    button {
      padding: 18px;
      border-radius: 8px;
      margin-left: 10px;
      background-color: #D90B1C;

      transition: filter .2s ease;

      &:hover{
        filter: brightness(92%);
      }
    }
  }
`;
