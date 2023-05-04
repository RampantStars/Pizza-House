import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TypeIngredientCreateForm from './TypeIngredientCreateForm';

describe('<TypeIngredientCreateForm />', () => {
  test('it should mount', () => {
    render(<TypeIngredientCreateForm />);
    
    const typeIngredientCreateForm = screen.getByTestId('TypeIngredientCreateForm');

    expect(typeIngredientCreateForm).toBeInTheDocument();
  });
});