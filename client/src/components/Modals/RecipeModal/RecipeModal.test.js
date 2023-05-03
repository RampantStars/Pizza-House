import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RecipeModal from './RecipeModal';

describe('<RecipeModal />', () => {
  test('it should mount', () => {
    render(<RecipeModal />);
    
    const recipeModal = screen.getByTestId('RecipeModal');

    expect(recipeModal).toBeInTheDocument();
  });
});