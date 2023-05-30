import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RecipeVariationModal from './RecipeVariationModal';

describe('<RecipeVariationModal />', () => {
  test('it should mount', () => {
    render(<RecipeVariationModal />);
    
    const recipeVariationModal = screen.getByTestId('RecipeVariationModal');

    expect(recipeVariationModal).toBeInTheDocument();
  });
});