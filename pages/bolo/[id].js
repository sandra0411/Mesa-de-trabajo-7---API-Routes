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
  if (error) return <div>No hay naranja fanta</div>;
  
  if (!data) return <div>Carregando...</div>;

  return (

    <>

    <a href="/">Volver al inicio</a>


    <article>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <img src={data.image} alt={data.title} width="300" height="300"/>
      <p>{data.text}</p>
    </article>

    
    </>
    
  );
};

export default Bolo;
