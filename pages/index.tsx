import { InferGetServerSidePropsType } from "next";
import Bolo from "../components/Bolo";


export type Receita ={
  title: string,
  image:string,
  description: string,
  text: string ,
  id: string,
}


export const getServerSideProps = async() =>{

  const res = await fetch('http://localhost:3000/api/receitas')
  const receitas: Receita[] = await res.json()
 
  

  return{
    props:{
      receitas
    }
  }
}

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Home = ({receitas}:Props) => {

  return (
    <>

    {receitas.map(receita =>

    <Bolo key={receita.id} receita={receita}/>
      )}
      
    </> 
      )
  
};

export default Home;
