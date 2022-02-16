import { Usuario } from "./Usuario";

export class Docente extends Usuario{
    constructor(
        protected id: string,
        protected nome: string,
        protected email: string,
        protected data_nasc: string,
        protected turma_id: string,
        especialidades: string[]
    ){
        super(id, nome, email, data_nasc, turma_id)
    }
}