import React from 'react';
import ReactDom from 'react-dom';
import Conversor from './App';

it('deve renderizar o componente sem erros', () => {
  const div = document.createElement('div');
  ReactDom.render(<Conversor />, div);
  ReactDom.unmountComponentAtNode(div);
});
