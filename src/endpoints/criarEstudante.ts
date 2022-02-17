import { Request, Response } from "express"
import { Estudante } from "../classes/Estudante"
import { criarEstudanteDb } from "../data/createDB"

export const criarEstudante =  async (req: Request, res: Response): Promise<void> =>{
    try{
        const id = Date.now().toString()
        const {nome, email, data_nasc, turma_id, hobbies} = req.body
        
        const dataNasc = data_nasc.split("/")
        const data_nasc2 = `${dataNasc[2]}-${dataNasc[1]}-${dataNasc[0]}`
        console.log(dataNasc)

        if(!nome || !email || !data_nasc || !turma_id || !hobbies){
            throw new Error("falta info no body!")
        }

        const estudante = new Estudante(id, nome, email, data_nasc2, turma_id)
        

        await criarEstudanteDb(estudante)



        res.status(400).send("estudante criado com sucesso")
    }catch(error){
        res.status(400).send({message: error})
    }
}