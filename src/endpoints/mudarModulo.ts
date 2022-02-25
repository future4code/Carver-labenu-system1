import { Request, Response } from "express";
import { connection } from "../data/connection";


export const mudarModulo = async (req: Request, res: Response) => {
    try {
        const { modulo, id } = req.body

        if (!modulo || !id) {
            throw new Error("faltando info o body")
        }

        await mudarModuloDB(modulo, id)

        res.status(200).send("modulo modificado com sucesso!")
    } catch (error) {
        res.status(400).send({ message: error })
    }
}

const mudarModuloDB = async (modulo: number, id: string): Promise<any> => {
    const result = await connection.raw(`
        UPDATE Turma set modulo=${modulo} WHERE id = ${id};
    `)
    return result
}
