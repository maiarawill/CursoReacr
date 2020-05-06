import React from 'react';
import ReactDOM from 'react-dom';
import AtualizarTarefas from './AtualizarTarefas';
import Tarefa from '../Models/Tarefas.model';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';

describe('Teste do componente de atualiazação de tarefas', () => {

	const tarefaId = 1;

	it('deve exibir a modal de sucesso ao atualizar uma tarefa', async () => {
		axiosMock.get.mockResolvedValueOnce({ data: { nome: 'Estudar React' }});
		const { findByTestId } = render(<AtualizarTarefas id={tarefaId} />);
		fireEvent.click(await findByTestId('btn-atualizar'));
		const modal = await findByTestId('modal');
		expect(modal).toHaveTextContent('Sucesso');
	});

});
