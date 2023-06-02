import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RecipeVariationBlock from './RecipeVariationBlock';

describe('<RecipeVariationBlock />', () => {
  test('it should mount', () => {
    render(<RecipeVariationBlock />);

    const recipeVariationBlock = screen.getByTestId('RecipeVariationBlock');

    expect(recipeVariationBlock).toBeInTheDocument();
  });
});
