import { useCallback, useEffect, useState } from "react";
import * as yup from "yup";

import * as S from "./styles";

import Logo from "../../assets/logo.svg";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { api } from "../../config/api";
import { Informations, ModalProps } from "../../types/home";

function Modal({ isOpen, onRequestClose, id }: Omit<ModalProps, "onClose">) {
  const [informations, setInformations] = useState<Omit<Informations, "id" | "createdAt">>(
    {} as Informations
  );
  const [isRequestError, setIsRequestError] = useState<boolean>(false);
  const [isButtonActived, setIsButtonActived] = useState<boolean>(false);
  const [isEditInformations, setIsEditInformations] = useState<boolean>(false);

  let validation = yup.object().shape({
    name: yup.string().required(),
    type: yup.string().required(),
    avatar: yup.string(),
  });

  const handleInformations = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
      if (type === "avatar") {
        setInformations((oldState) => ({
          ...oldState,
          avatar: e.target.value,
        }));
      } else if (type === "name") {
        setInformations((oldState) => ({ ...oldState, name: e.target.value }));
      } else if (type === "type") {
        setInformations((oldState) => ({ ...oldState, type: e.target.value }));
      }
    },
    []
  );

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setIsButtonActived(true);
    await validation.isValid(informations).then(async (valid) => {
      if (valid === true) {
        if(isEditInformations){
          await api.put(`/v1/dragon/${id}`, informations);
        } else {
          await api.post('/v1/dragon/', informations);
        }
        window.location.reload();
      } else {
        setIsRequestError(true);
        setIsButtonActived(false);
      }
    });
  };

  useEffect(() => {
    (async () => {
      const response: {data: Omit<Informations, "id" | "createdAt">} = await api.get(`/v1/dragon/${id}`)
      const {avatar, name, type} = response.data
      setInformations({avatar, name, type})
      setIsEditInformations(true);
    })()
  }, [id])

  return (
    <S.ModalStyle isOpen={isOpen} onRequestClose={() => onRequestClose(false)}>
      <div>
        <img src={Logo} alt="Logo" />
        <p>{isEditInformations ? 'Edite' : 'Crie'} o seu dragão preenchendo as informações a seguir</p>
      </div>
      <form onSubmit={onSubmit}>
        <Input
          placeholder="Link do avatar - opcional"
          onChange={(e: any) => handleInformations(e, "avatar")}
          value={informations.avatar}
          />
        <Input
          placeholder="Nome"
          onChange={(e: any) => handleInformations(e, "name")}
          value={informations.name}
          />
        <Input
          placeholder="Tipo"
          onChange={(e: any) => handleInformations(e, "type")}
          value={informations.type}
        />
        <Button active={isButtonActived} disabled={isButtonActived}>
          Cadastrar
        </Button>
        {isRequestError && <p>*Nome e tipo obrigatório.</p>}
      </form>
    </S.ModalStyle>
  );
}

export default Modal;
