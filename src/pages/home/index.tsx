import { useEffect, useState } from "react";
import * as S from "./styles";

import Header from "../../components/Header";

import Image from "../../assets/fake-image.png";
import Delete from "../../assets/delete.svg";
import Edit from "../../assets/edit.svg";
import { api } from "../../config/api";

interface Informations {
  createdAt: string;
  name: string;
  type: string;
  id: string;
  avatar?: string;
}

function Home() {
  const [informations, setInformations] = useState<Informations[]>([]);
  

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
  }

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
                  <tr key={info.id}>
                    <td className="principal">
                      <img src={Image} alt="Foto" />
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
                      <button>
                        <img src={Edit} alt="editar" />
                      </button>
                    </td>
                  </tr>
                ))}
              </thead>
            </table>
          </div>
        </S.Informations>
      </S.Container>
      
    </>
  );
}

export default Home;
