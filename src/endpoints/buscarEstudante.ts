import { Request, Response } from "express";
import { connection } from "../data/connection";

export const buscarEstudante = async(req: Request, res: Response): Promise<any>=>{
    try{
        const nome: any = req.query.nome

        if(!req.query.nome){
            throw new Error("falta o query")
        }

        const estudantes = await buscarEstudanteBD(nome)

        res.status(200).send({ estudantes })

    }catch(error: any){
        res.status(400).send({error: error.message})
    }
}

const buscarEstudanteBD = async(nome: String): Promise<any>=>{
    const result = await connection.raw(`
        SELECT * FROM Estudante WHERE nome LIKE "%${nome}%";
    `)

    return result[0]
}