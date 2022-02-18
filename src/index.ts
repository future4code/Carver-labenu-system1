import { app } from "./app";
import {  criaTurma } from "./endpoints/CriaTurma";
import { pegaTurmasAtivas } from "./endpoints/pegaTurmasAtivas";
import { mudarModulo } from "./endpoints/mudarModulo"
import { criarEstudante } from "./endpoints/criarEstudante"
import { buscarEstudante } from "./endpoints/buscarEstudante"
import { mudarTurma } from './endpoints/mudarTurmaEstudante'
import { criarDocente} from "./endpoints/criarDocente"
import { buscarDocentes } from "./endpoints/buscaDocentes";
import { mudarTurmaDocente } from './endpoints/mudarTurmaDocente'

app.post("/turma", criaTurma)

app.get("/turma", pegaTurmasAtivas)

app.put("/turma/modulo", mudarModulo)

app.get("/estudante", buscarEstudante)

app.post("/estudante", criarEstudante)

app.put("/estudante/turma", mudarTurma)

app.get("/docente", buscarDocentes)

app.post("/docente", criarDocente)

app.put("/docente/turma", mudarTurmaDocente)