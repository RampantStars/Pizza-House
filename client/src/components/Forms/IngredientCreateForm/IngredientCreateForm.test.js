import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IngredientCreateForm from './IngredientCreateForm';

describe('<IngredientCreateForm />', () => {
  test('it should mount', () => {
    render(<IngredientCreateForm />);
    
    const ingredientCreateForm = screen.getByTestId('IngredientCreateForm');

    expect(ingredientCreateForm).toBeInTheDocument();
  });
});