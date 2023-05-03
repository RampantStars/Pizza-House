import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RecipeCreateForm from './RecipeCreateForm';

describe('<RecipeCreateForm />', () => {
  test('it should mount', () => {
    render(<RecipeCreateForm />);
    
    const recipeCreateForm = screen.getByTestId('RecipeCreateForm');

    expect(recipeCreateForm).toBeInTheDocument();
  });
});