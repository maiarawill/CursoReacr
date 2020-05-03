import React from 'react';
import { render } from '@testing-library/react';
import Ecommerce from './App';

test('renders learn react link', () => {
  const { getByText } = render(<Ecommerce />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
