import { Request, Response } from "express"
import { Docente } from "../classes/Docente"
import { criaEspecialidadeDocente, criarDocenteDb } from "../data/createDB"

export const criarDocente = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = Date.now().toString()
        const { nome, email, data_nasc, turma_id, especialidades } = req.body

        const dataNasc = data_nasc.split("/")
        const data_nasc2 = `${dataNasc[2]}-${dataNasc[1]}-${dataNasc[0]}`

        if (!nome || !email || !data_nasc || !turma_id || !especialidades) {
            throw new Error("falta info no body!")
        }

        const docente = new Docente(id, nome, email, data_nasc2, turma_id, especialidades)

        await criarDocenteDb(docente)

        for (let i = 0; i <= especialidades.length - 1; i++) {
            await criaEspecialidadeDocente(docente, especialidades[i])
        }

        res.status(400).send("Docente criado com sucesso!")
    } catch (error) {
        res.status(400).send({ message: error })
    }
}
