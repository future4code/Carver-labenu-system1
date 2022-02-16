import { app } from "./app";
import {  criaTurma } from "./endpoints/CriaTurma";

app.post("/turma", criaTurma)