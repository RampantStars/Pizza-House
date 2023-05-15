import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TypeIngredientEditForm from './TypeIngredientEditForm';

describe('<TypeIngredientEditForm />', () => {
  test('it should mount', () => {
    render(<TypeIngredientEditForm />);
    
    const typeIngredientEditForm = screen.getByTestId('TypeIngredientEditForm');

    expect(typeIngredientEditForm).toBeInTheDocument();
  });
});