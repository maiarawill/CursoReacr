import React from 'react';
import {render} from '@testing-library/react';
import Menu from './Menu';

describe('Teste do componente de menu', () => {
    it('Deve renderizar o componente sem erros', () => {
        const {getByText} = render(<Menu />);
        const texto = getByText(/Menu/i);
        expect(texto).toBeInTheDocument();
    })
})