import React from 'react'
import ReactDOM from 'react-dom'
import CadastrarTarefas from './CadastrarTarefas'
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Teste do componente de cadastro de tarefas', () => {

    it('Renderizar o componente sem erros', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CadastrarTarefas />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('deve cadastrar uma nova tarefa', () => {
        const { getByTestId } = render(<CadastrarTarefas />);
        fireEvent.change(getByTestId('txt-tarefa'), { target: { value: 'Testar componente' }});
        fireEvent.click(getByTestId('btn-cadastrar'));
        expect(getByTestId('modal')).toHaveTextContent('Sucesso');
        expect(getByTestId('modal')).toHaveTextContent('Tarefa adicionada com sucesso!');
      });

})