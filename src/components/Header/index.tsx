import { useEffect, useState } from "react";
import * as S from "./styles";

import Logo from "../../assets/logo-white.svg";
import Power from "../../assets/power.svg";
import Modal from "../../components/Modal";
import { Button } from "../Button/styles";
import { useHistory } from "react-router";

function Header() {
  const history = useHistory();
  const [name, setName] = useState<string | null>("");
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    const response = localStorage.getItem("@name");
    setName(response);
  }, []);

  const onClose = () => {
    localStorage.clear();
    history.push("/");
  };

  

  return (
    <>
      <S.Container>
        <S.Wellcome>
          <img src={Logo} alt="Logo" />
          {name && <p>Bem vindo(a), {name}</p>}
        </S.Wellcome>
        <S.Buttons>
          <Button onClick={() => setOpenModal(true)}>
            Cadastrar novo dragão
          </Button>
          <S.Icon onClick={onClose}>
            <img src={Power} alt="Sair" />
          </S.Icon>
        </S.Buttons>
      </S.Container>
      <Modal isOpen={openModal} onRequestClose={setOpenModal} />
    </>
  );
}

export default Header;
