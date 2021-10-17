import { Link } from "react-router-dom";
import * as S from "./styles";

import Logo from "../../assets/logo-white.svg";
import ArrowRight from "../../assets/arrow-right.svg";
import Input from "../../components/Input";

function Auth() {
  return (
    <>
      <S.DragonImage />
      <S.Container>
        <img src={Logo} alt="South Dragon" />
        <h1>Faça seu login</h1>
        <div>
          <Input placeholder="Digite seu nome" />
          <Link to="/home">
            <img src={ArrowRight} alt="Avançar" />
          </Link>
        </div>
      </S.Container>
    </>
  );
}

export default Auth;
