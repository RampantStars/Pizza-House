import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AdminRecipe from './AdminRecipe';

describe('<AdminRecipe />', () => {
  test('it should mount', () => {
    render(<AdminRecipe />);
    
    const adminRecipe = screen.getByTestId('AdminRecipe');

    expect(adminRecipe).toBeInTheDocument();
  });
});