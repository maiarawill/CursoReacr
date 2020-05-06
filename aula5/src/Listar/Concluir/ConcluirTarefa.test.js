import React from 'react';
import ReactDOM from 'react-dom';
import ConcluirTarefas from './ConcluirTarefa';
import Tarefa from '../../Models/Tarefas.model';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';

describe('Teste do componente de conclusão de tarefas', () => {

  const nomeTarefa = 'Tarefa de teste';
  const tarefa = new Tarefa(1, nomeTarefa, false);

  it('deve exibir a modal', () => {
    const { getByTestId } = render(
      <ConcluirTarefas
        tarefa={tarefa}
        recarregarTarefas={() => false} />
    );
    fireEvent.click(getByTestId('btn-abrir-modal'));
    expect(getByTestId('modal')).toHaveTextContent(nomeTarefa);
  });

  it('deve concluir uma tarefa', async () => {
    const { getByTestId, findByTestId } = render(
      <ConcluirTarefas
        tarefa={tarefa}
        recarregarTarefas={() => false} />
    );
    fireEvent.click(getByTestId('btn-abrir-modal'));
    fireEvent.click(getByTestId('btn-concluir'));
    await findByTestId('modal');
    expect(axiosMock.put).toHaveBeenCalledTimes(1);
  });

});
