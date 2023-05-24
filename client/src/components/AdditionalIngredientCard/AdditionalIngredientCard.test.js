import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AdditionalIngredientCard from './AdditionalIngredientCard';

describe('<AdditionalIngredientCard />', () => {
  test('it should mount', () => {
    render(<AdditionalIngredientCard />);
    
    const additionalIngredientCard = screen.getByTestId('AdditionalIngredientCard');

    expect(additionalIngredientCard).toBeInTheDocument();
  });
});