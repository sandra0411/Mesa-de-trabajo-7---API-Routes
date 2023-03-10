import { NextApiRequest, NextApiResponse } from "next";
import { receitas } from "../../../data" 

export default function boloHandler(req:NextApiRequest, res: NextApiResponse) {

    const {id} = req.query

   const match= receitas.filter(receta => receta.id === id)

   res.status(200).json(match[0])
   

  /*  try {
    
    const {id} = req.query
    const match= receitas.filter(receta => receta.id === id)
    res.status(200).json(match[0])

    } catch (err) {
        res.status(404).json({ error: "No se ha encontrado el pastel con el ID informado." });
    } */

    
}
