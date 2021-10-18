import { useEffect, useState } from "react";
import * as S from "./styles";

import Header from "../../components/Header";

import Image from "../../assets/null-avatar.gif";
import Delete from "../../assets/delete.svg";
import Edit from "../../assets/edit.svg";
import { api } from "../../config/api";
import Modal from "../../components/Modal";

interface Informations {
  createdAt: string;
  name: string;
  type: string;
  id: string;
  avatar?: string;
}

function Home() {
  const [informations, setInformations] = useState<Informations[]>([]);
  const [isActiveModal, setIsActiveModal] = useState<boolean>(false);
  const [idEdit, setIdEdit] = useState<string>("");

  useEffect(() => {
    async function getDragons() {
      const { data }: any = await api.get("/v1/dragon");
      setInformations(data);
    }
    getDragons();
  }, []);

  const onActiveDelete = async (id: string) => {
    await api.delete(`/v1/dragon/${id}`);
    window.location.reload();
  };

  const onActiveEdit = (id: string) => {
    setIsActiveModal(true);
    setIdEdit(id);
  };

  return (
    <>
      <S.Container>
        <Header />
        <S.Informations>
          <h1>Lista de dragões</h1>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Tipo</th>
                  <th>Data de criação</th>
                  <th>Hora da criação</th>
                </tr>
                {informations?.map((info) => (
                  <>
                    <tr key={info.id}>
                      <td className="principal">
                        <img
                          src={info.avatar ? info.avatar : Image}
                          alt="Foto"
                        />
                        {info.name}
                      </td>
                      <td>{info.type}</td>
                      <td>
                        {new Intl.DateTimeFormat("pt-BR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }).format(new Date(info.createdAt))}
                      </td>
                      <td>
                        {new Intl.DateTimeFormat("pt-BR", {
                          timeStyle: "medium",
                        }).format(new Date(info.createdAt))}
                      </td>
                      <td>
                        <button onClick={() => onActiveDelete(info.id)}>
                          <img src={Delete} alt="deletar" />
                        </button>
                        <button onClick={() => onActiveEdit(info.id)}>
                          <img src={Edit} alt="editar" />
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
              </thead>
            </table>
          </div>
        </S.Informations>
      </S.Container>
      <Modal
        isOpen={isActiveModal}
        onRequestClose={setIsActiveModal}
        id={idEdit}
      />
    </>
  );
}

export default Home;
