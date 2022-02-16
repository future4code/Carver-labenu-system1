import { Usuario } from "./Usuario";

export class Estudante extends Usuario{
    constructor(
        protected id: string,
        protected nome: string,
        protected email: string,
        protected data_nasc: string,
        protected turma_id: string,
        hobbies: string[]
    ){
        super(id, nome, email, data_nasc, turma_id)
    }
}