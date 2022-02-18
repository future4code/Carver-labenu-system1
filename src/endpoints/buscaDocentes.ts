import { Request, Response } from "express";
import { connection } from "../data/connection";

export const buscarDocentes = async (req: Request, res: Response): Promise<any> => {
    try {

        const docentes = await buscarDocenteDB()

        res.status(200).send({ docentes })

    } catch (error: any) {
        res.status(400).send({ error: error.message })
    }
}

const buscarDocenteDB = async (): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Docente;
    `)

    return result[0]
}