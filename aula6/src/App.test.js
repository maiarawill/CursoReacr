import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './App';

it('deve renderizar o componente sem erros', () => {
  const { getByText } = render(<Dashboard />);
  const linkElement = getByText(/dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
