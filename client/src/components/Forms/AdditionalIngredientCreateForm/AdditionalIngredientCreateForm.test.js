import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AdditionalIngredientCreateForm from './AdditionalIngredientCreateForm';

describe('<AdditionalIngredientCreateForm />', () => {
  test('it should mount', () => {
    render(<AdditionalIngredientCreateForm />);
    
    const additionalIngredientCreateForm = screen.getByTestId('AdditionalIngredientCreateForm');

    expect(additionalIngredientCreateForm).toBeInTheDocument();
  });
});