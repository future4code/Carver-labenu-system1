import { app } from "./app";
import {  criaTurma } from "./endpoints/CriaTurma";
import { pegaTurmasAtivas } from "./endpoints/pegaTurmasAtivas";
import { mudarModulo } from "./endpoints/mudarModulo"
import { criarEstudante } from "./endpoints/criarEstudante"
import { buscarEstudante } from "./endpoints/buscarEstudante"

app.post("/turma", criaTurma)

app.get("/turma", pegaTurmasAtivas)

app.put("/turma/modulo", mudarModulo)

// 1645109738351

app.get("/estudante", buscarEstudante)

app.post("/estudante", criarEstudante)