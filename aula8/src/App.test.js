import React from 'react';
import { render } from '@testing-library/react';
import Upload from './App';

test('deve rederizar o componente com sucesso', () => {
  const { getByText } = render(<Upload />);
  const linkElement = getByText(/"Upload de imagens"/i);
  expect(linkElement).toBeInTheDocument();
});
