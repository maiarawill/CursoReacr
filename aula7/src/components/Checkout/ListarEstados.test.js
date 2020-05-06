import React from 'react';
import {render} from '@testing-library/react';
import ListarEstados from './ListarEstados';

describe('Teste do componente de listagem de estados', () =>{
    it('Deve gerar uma listagem de estado', () => {
        const {getByTestId} = render (<ListarEstados/>);
        expect (getByTestId('AM')).toHaveTextContent('Amazonas');
        expect (getByTestId('SP')).toHaveTextContent('São Paulo');
    });
});