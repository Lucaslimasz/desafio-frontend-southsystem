import { useEffect, useState } from "react";
import { api } from "../../config/api";

import Image from "../../assets/null-avatar.gif";

import * as S from "./styles";
import { Informations, ModalProps } from "../../types/home";

function ViewDragon({ isOpen, onClose, id }: Omit<ModalProps, "onRequestClose">) {
  const [informations, setInformations] = useState<Informations>(
    {} as Informations
  );

  useEffect(() => {
    (async () => {
      const response: { data: Informations } = await api.get(
        `/v1/dragon/${id}`
      );
      setInformations(response.data);
    })();
  }, [id]);

  return (
    <S.Container isOpen={isOpen} onRequestClose={onClose} data={{background: "#000"}}>
      <img src={informations.avatar ?? Image} alt="imagem" />
      <h1>{informations.name}</h1>
      <p>{informations.type}</p>
    </S.Container>
  );
}

export default ViewDragon;
