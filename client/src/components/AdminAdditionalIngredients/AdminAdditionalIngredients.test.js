import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AdminAdditionalIngredients from './AdminAdditionalIngredients';

describe('<AdminAdditionalIngredients />', () => {
  test('it should mount', () => {
    render(<AdminAdditionalIngredients />);

    const adminAdditionalIngredients = screen.getByTestId('AdminAdditionalIngredients');

    expect(adminAdditionalIngredients).toBeInTheDocument();
  });
});
