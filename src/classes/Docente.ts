import { Usuario } from "./Usuario";

export class Docente extends Usuario{
    constructor(
        protected id: string,
        protected nome: string,
        protected email: string,
        protected data_nasc: string,
        protected turma_id: string,
        protected especialidades: string[]
    ){
        super(id, nome, email, data_nasc, turma_id)
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
    public getEspecialidades(): string[]{
        return this.especialidades
    }
}

