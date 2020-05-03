import React from 'react';
import ReactDom from 'react-dom';
import Tarefas from './App';

it('deve renderizar o componente sem erros', () => {
  const div = document.createElement('div');
  ReactDom.render(<Tarefas />, div);
  ReactDom.unmountComponentAtNode(div);
});
  