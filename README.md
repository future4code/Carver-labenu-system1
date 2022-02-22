## LabenuSystem:

## Link para a documentação:
https://documenter.getpostman.com/view/18384389/UVkmSHkn

Foi desenvolvido todo o projeto, utilizando tecnologias como Typescript, API's REST, Express, Knex, SQL, Funções assíncronas, etc...
Ele possui, 3 entidades importantes:

1. Estudantes 

    Representa estudantes da instituição. Eles possuem: id, nome, email, data de nascimento e os principais hobbies deles. 

2. Docente

    Representa docentes da instituição. Eles possuem: id, nome, email, data de nascimento e todas as especialidades dele. Há 5 especialidades: React, CSS, JS, Typescript e POO.

3. Turma

    Toda turma é composta das seguintes características: id, nome, lista de professores responsáveis, uma lista de alunos e módulo atual em que a turma está.

    O módulo pode assumir os valores de 0 a 6, onde 0 indica que as aulas dessa turma ainda não começaram.

As funcionalidades básicas são:

→ Criar turma;

→ Buscar turmas ativas

→ Mudar turma de módulo

→ Criar estudante;

→ Buscar estudantes através do nome

→ Mudar estudante de turma

→ Criar docente;

→ Buscar todas as pessoas docentes

→ Mudar docente de turma
