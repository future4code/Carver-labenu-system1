import { Request, Response } from "express";
import { connection } from "../data/connection";


export const mudarTurmaDocente = async (req: Request, res: Response) => {
    try {
        const { turma, id } = req.body

        if (!turma || !id) {
            throw new Error("faltando info o body")
        }

        await mudarTurmaDB(turma, id)

        res.status(200).send("turma modificada com sucesso!")
    } catch (error) {
        res.status(400).send({ message: error })
    }
}

const mudarTurmaDB = async (turma: number, id: string): Promise<any> => {
    const result = await connection.raw(`
        UPDATE Docente set turma_id = ${turma} WHERE id = ${id};
    `)
    return result
}
