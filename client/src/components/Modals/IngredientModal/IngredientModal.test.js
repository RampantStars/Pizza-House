import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IngredientModal from './IngredientModal';

describe('<IngredientModal />', () => {
  test('it should mount', () => {
    render(<IngredientModal />);
    
    const ingredientModal = screen.getByTestId('IngredientModal');

    expect(ingredientModal).toBeInTheDocument();
  });
});