import React from 'react';
import { render } from '@testing-library/react';
import Checkout from './Checkout'

describe('Teste do componente Checkout', () => {
    it('Deve renderizar o componente sem erros', () => {
        const {getByText} = render(<Checkout />);
        const texto = getByText(/Checkout/i);
        expect(texto).toBeInTheDocument();
    })
})