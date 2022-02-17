export class Turma{

    constructor(
       private id: string,
       private nome: string,
       private modulo: number,
       private docentes?: string[],
       private estudantes?: string[]
       
    ){}

    public getId(): string{
        return this.id
    }

    public getNome(): string{
        return this.nome
    }

    public getModulo(): number{
        return this.modulo
    }
    


}