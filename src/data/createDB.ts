import { Turma } from "../classes/Turma";
import { connection } from "./connection";
import { Estudante } from "../classes/Estudante"
import { Docente } from "../classes/Docente"

export const criaTurmaDb = async (turmaParametro: Turma): Promise<any> => {

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
        INSERT INTO Estudante ()
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

export const criaHobbie = async (estudante: Estudante, hobby: string): Promise<any> => {
    let id = Date.now().toString()
    await connection.raw(`
    INSERT INTO Hobby (id, nome)
    VALUES(
    '${id}',    
    '${hobby}'
     );   
    `)

    await criaHobbieEstudante(estudante, id)
}

export const criaHobbieEstudante = async (estudante: Estudante, idHobby: string): Promise<any> => {
    const result = await connection.raw(`
    INSERT INTO Estudante_Hobby (id, estudante_id, hobby_id)
    VALUES(
    '${Date.now().toString()}',    
    '${estudante.getId()}',
    '${idHobby}'
     );   
    `)
    return result[0]
}

export const criarDocenteDb = async (docente: Docente): Promise<any> => {
    const result = await connection.raw(`
        INSERT INTO Docente
        VALUES (
            '${docente.getId()}',
            '${docente.getNome()}',
            '${docente.getEmail()}',
            '${docente.getData_nasc()}',
            '${docente.getTurma_id()}'
        );
    `)
    return result[0]
}

// export const criaEspecialidade = async (docente: Docente, especialidade: string): Promise<any>=>{
//     let id = Date.now().toString()
//     await connection.raw(`
//     INSERT INTO especialidade (id, nome)
//     VALUES(
//     '${id}',    
//     '${especialidade}'
//      );   
//     `)

//     await criaEspecialidadeDocente(docente, id)
// }

export const criaEspecialidadeDocente = async (docente: Docente, especialidade: string): Promise<any> => {
    const result = await connection.raw(`
        INSERT INTO Docente_Especialidade (id, docente_id, especialidade_id)
        VALUES(
        '${Date.now().toString()}',    
        '${docente.getId()}',
        '${especialidade}'
        );   
    `)
    return result[0]
}
