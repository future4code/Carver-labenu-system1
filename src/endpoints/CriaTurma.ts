import { Request, Response } from "express"
import { Turma } from "../classes/Turma"
import { criaTurmaDb } from "../data/createDB"

export const criaTurma = async (req: Request, res: Response): Promise<void> => {
    try {
        const body: any = {
            id: Date.now().toString(),
            nome: req.body.nome,
            docentes: !req.body.docentes ? null : req.body.docentes,
            estudantes: !req.body.estudantes ? null : req.body.estudantes,
            modulo: req.body.modulo
        }

        let turma: Turma

        if (!req.body.docentes && body.estudantes !== null) {
            turma = new Turma(body.id, body.nome, body.estudantes, body.modulo)
            await criaTurmaDb(turma)

        } else if (!body.estudantes && body.docentes !== null) {
            turma = new Turma(body.id, body.nome, body.modulo, body.docentes)
            await criaTurmaDb(turma)

        } else if (body.docentes === null && body.estudantes === null) {
            turma = new Turma(body.id, body.nome, body.modulo)

            await criaTurmaDb(turma)
        }



        res.send("turma criada com sucesso!")
    } catch (error: any) {

    }
}