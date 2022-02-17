import { Request, Response } from "express";
import { connection } from "../data/connection";

export const pegaTurmasAtivas = async(req: Request, res: Response): Promise<any>=>{
    try{
        const turmas = await pegaTurmas()

        res.status(200).send({ turmas })

    }catch(error: any){

    }
}

const pegaTurmas = async(): Promise<any>=>{
    const result = await connection.raw(`
        SELECT * FROM Turma WHERE modulo > 0;
    `)

    return result[0]
}