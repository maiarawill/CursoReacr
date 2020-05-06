import React from 'react';
import ReactDOM from 'react-dom';
import CadastrarTarefas from './CadastrarTarefas';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from'axios';

describe('Teste do componente de cadastro de tarefas', () => {

  it('deve cadastrar uma nova tarefa', async () => {
    const { getByTestId, findByTestId } = render(<CadastrarTarefas />);
    fireEvent.change(getByTestId('txt-tarefa'), { target: { value: 'Testar componente' }});
    fireEvent.click(getByTestId('btn-cadastrar'));
    const modal = await findByTestId('modal');
    expect(modal).toHaveTextContent('Sucesso');
    expect(modal).toHaveTextContent('Tarefa adicionada com sucesso!');
  });

});
