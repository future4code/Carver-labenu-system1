import { Request, Response } from "express"
import { Turma } from "../classes/Turma"

export const criaTurma = async(req: Request, res: Response): Promise<void> =>{
    try{
        const body: any = {
            id: Date.now().toString(),
            nome: req.body.nome,
            docentes: req.body.docentes,
            estudantes: req.body.estudantes,
            modulo: req.body.modulo
        }

        const turma: Turma = new Turma(body.id, body.nome, body.docentes, body.estudantes, body.modulo)

        res.send(turma)
    }catch(error: any){

    }
}