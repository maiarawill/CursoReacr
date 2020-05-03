import React from 'react';
import ReactDOM from 'react-dom'
import AtualizarTarefa from './AtualizarTarefas'

describe('Teste do componente do cadastro de tarefas', () => {

    it('Deve renderizar o componente sem erros', () => {
        const div = document.createElement('div');
        ReactDOM.render (<AtualizarTarefa />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

})