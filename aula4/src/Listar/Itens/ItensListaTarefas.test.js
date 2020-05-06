import React from 'react';
import ReactDOM from 'react-dom';
import ItensListaTarefas from './ItensListaTarefas';
import Tarefas from '../../Models/Tarefas.model';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Tarefa from '../../Models/Tarefas.model';

describe('Teste do componente que exibe um item da listagem', () => {

    const nomeTarefa = 'Tarefa';
    const tarefa = new Tarefa(1, nomeTarefa, false);
    const tarefaConcluida = new Tarefa(2, nomeTarefa, true);

    it('Deve renderizar a listagem de intens sem erro', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ItensListaTarefas tarefas={[]} recarregarTarefas={() => false}/>, div)
        ReactDOM.unmountComponentAtNode(div);
    });
    
    it('deve exibir a tarefa', () =>{
        const {getByTestId} = render(
        <table>
            <tbody>
                <ItensListaTarefas
                tarefas={[tarefa]}
                recarregarTarefas={() => false} />
            </tbody>
        </table>);
        expect(getByTestId('tarefa')).toHaveTextContent(nomeTarefa);
    });

    it('deve exibir uma tarefa concluida', () =>{
        const {getByTestId} = render(
            <table>
                <tbody>
                    <ItensListaTarefas
                    tarefas={[tarefaConcluida]}
                    recarregarTarefas={() => false} />
                </tbody>
            </table>);
    expect(getByTestId('nome-tarefa')).toHaveStyle('text-decoration: line-through');
    })


});