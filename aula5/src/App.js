import React from 'react';
import { useRoutes } from 'hookrouter';

import ListarTarefas from './Listar/ListarTarefas';
import CadastrarTarefa from './Cadastrar/CadastrarTarefas';
import AtualizarTarefa from './Atualizar/AtualizarTarefas';
import './App.css';

const routes = {
  '/': () => <ListarTarefas />,
  '/cadastrar': () => <CadastrarTarefa />,
  '/atualizar/:id': ({id}) => <AtualizarTarefa id={id} />
}

function Tarefas() {
  return useRoutes(routes);
}

export default Tarefas;
