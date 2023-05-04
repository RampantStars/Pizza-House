import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TypeIngredientModal from './TypeIngredientModal';

describe('<TypeIngredientModal />', () => {
  test('it should mount', () => {
    render(<TypeIngredientModal />);
    
    const typeIngredientModal = screen.getByTestId('TypeIngredientModal');

    expect(typeIngredientModal).toBeInTheDocument();
  });
});