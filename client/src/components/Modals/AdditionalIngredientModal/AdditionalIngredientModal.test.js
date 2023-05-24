import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AdditionalIngredientModal from './AdditionalIngredientModal';

describe('<AdditionalIngredientModal />', () => {
  test('it should mount', () => {
    render(<AdditionalIngredientModal />);
    
    const additionalIngredientModal = screen.getByTestId('AdditionalIngredientModal');

    expect(additionalIngredientModal).toBeInTheDocument();
  });
});