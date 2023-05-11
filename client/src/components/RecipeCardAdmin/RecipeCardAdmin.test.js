import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RecipeCardAdmin from './RecipeCardAdmin';

describe('<RecipeCardAdmin />', () => {
  test('it should mount', () => {
    render(<RecipeCardAdmin />);
    
    const recipeCardAdmin = screen.getByTestId('RecipeCardAdmin');

    expect(recipeCardAdmin).toBeInTheDocument();
  });
});