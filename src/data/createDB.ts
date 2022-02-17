import { Turma } from "../classes/Turma";
import { connection } from "./connection";
import { Estudante } from "../classes/Estudante"

export const criaTurmaDb = async (turmaParametro: Turma): Promise<any> => {

    console.log(turmaParametro.getId())
    const result = await connection.raw(`
            INSERT INTO Turma (id, nome, modulo)
            VALUES (
                '${turmaParametro.getId()}',
                '${turmaParametro.getNome()}',
                '${turmaParametro.getModulo()}'
            )
        `)

    return result[0]

}

export const criarEstudanteDb = async (estudante: Estudante): Promise<any> => {
    const result = await connection.raw(`
    INSERT INTO Estudante 
    VALUES (
        '${estudante.getId()}',
        '${estudante.getNome()}',
        '${estudante.getEmail()}',
        '${estudante.getData_nasc()}',
        '${estudante.getTurma_id()}'
       
    );
`)
    // '${estudante.getHobbies()}'
    return result[0]
}