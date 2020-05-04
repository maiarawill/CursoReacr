import React from 'react';
import { render } from '@testing-library/react';
import Ecommerce from './App';


describe('Teste do componente Ecommerce', () => {
  it('Deve renderizar o componente sem erros', () => {
    const { getByText } = render(<Ecommerce />);
    const linkElement = getByText(/Checkout/i);
    expect(linkElement).toBeInTheDocument();
  });
});

