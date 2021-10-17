import { useHistory } from "react-router-dom";
import * as S from "./styles";

import Logo from "../../assets/logo-white.svg";
import ArrowRight from "../../assets/arrow-right.svg";
import Input from "../../components/Input";
import { useState } from "react";

function Auth() {
  const history = useHistory();
  const [name, setName] = useState<string>('');

  const nextPage = () => {
    localStorage.setItem('@name', name)
    history.push('/home')
  }

  return (
    <>
      <S.DragonImage />
      <S.Container>
        <img src={Logo} alt="South Dragon" />
        <h1>Faça seu login</h1>
        <div>
          <Input
            placeholder="Digite seu nome"
            onChange={(e: any) => setName(e.target.value)}
            value={name}
          />
          <button onClick={nextPage}>
            <img src={ArrowRight} alt="Avançar" />
          </button>
        </div>
      </S.Container>
    </>
  );
}

export default Auth;
