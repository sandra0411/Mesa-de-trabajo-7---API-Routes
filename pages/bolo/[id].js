import { useRouter } from "next/router";
import useSWR from "swr";

// Exemplo da utilização do SWR, mas você pode utilizar fetch, axios...
const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

const Bolo = () => {
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.id && `/api/receitas/${query.id}`,
    fetcher
  );

  // Status da requição para o usuário
  if (error) return <div>Falha ao carregar</div>;
  if (!data) return <div>Carregando...</div>;

  return (
    <h2>
      Iremos renderizar os dados completo do bolo aqui, além disso crie um botão
      para voltar para a página inicial utilizando o componente Link do Next.js
    </h2>
  );
};

export default Bolo;
