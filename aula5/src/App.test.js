import React from 'react';
import ReactDOM from 'react-dom';
import Tarefas from './App'

it('deve renderizar o projeto sem erros', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tarefas />, div);
  ReactDOM.unmountComponentAtNode(div);
});
