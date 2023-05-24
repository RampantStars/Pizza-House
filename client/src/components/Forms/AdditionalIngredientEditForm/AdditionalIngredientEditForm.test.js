import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AdditionalIngredientEditForm from './AdditionalIngredientEditForm';

describe('<AdditionalIngredientEditForm />', () => {
  test('it should mount', () => {
    render(<AdditionalIngredientEditForm />);
    
    const additionalIngredientEditForm = screen.getByTestId('AdditionalIngredientEditForm');

    expect(additionalIngredientEditForm).toBeInTheDocument();
  });
});