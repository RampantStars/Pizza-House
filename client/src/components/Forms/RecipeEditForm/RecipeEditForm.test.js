import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RecipeEditForm from './RecipeEditForm';

describe('<RecipeEditForm />', () => {
  test('it should mount', () => {
    render(<RecipeEditForm />);
    
    const recipeEditForm = screen.getByTestId('RecipeEditForm');

    expect(recipeEditForm).toBeInTheDocument();
  });
});