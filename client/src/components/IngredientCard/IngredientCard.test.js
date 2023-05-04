import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IngredientCard from './IngredientCard';

describe('<IngredientCard />', () => {
  test('it should mount', () => {
    render(<IngredientCard />);
    
    const ingredientCard = screen.getByTestId('IngredientCard');

    expect(ingredientCard).toBeInTheDocument();
  });
});