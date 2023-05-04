import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AdminIngredient from './AdminIngredient';

describe('<AdminIngredient />', () => {
  test('it should mount', () => {
    render(<AdminIngredient />);
    
    const adminIngredient = screen.getByTestId('AdminIngredient');

    expect(adminIngredient).toBeInTheDocument();
  });
});