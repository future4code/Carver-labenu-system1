import { Usuario } from "./Usuario";

export class Estudante extends Usuario{
    constructor(
        protected id: string,
        protected nome: string,
        protected email: string,
        protected data_nasc: string,
        protected turma_id: string,
        protected hobbies: string[]
    ){
        super(id, nome, email, data_nasc, turma_id)
        this.hobbies = hobbies
    }

    public getId(): string{
        return this.id
    }
    public getNome(): string{
        return this.nome
    }
    public getEmail(): string{
        return this.email
    }
    public getData_nasc(): string{
        return this.data_nasc
    }
    public getTurma_id(): string{
        return this.turma_id
    }
    public getHobbies(): string[]{
        return this.hobbies
    }
}