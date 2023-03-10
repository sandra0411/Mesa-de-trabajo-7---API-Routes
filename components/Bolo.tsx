import { NextPage } from "next";
import Link from "next/link";
import type { Receita } from "../pages";

interface Props {
  receita: Receita
}


const Bolo:NextPage<Props> = ({receita}) => {
  return (
    <article>
      <Link href= {`/bolo/${receita.id}`}>
        <a>
          <h2>{receita.title}</h2>
          <p>{receita.description}</p>
        </a>
      </Link>
    </article>
  );
};

export default Bolo;
