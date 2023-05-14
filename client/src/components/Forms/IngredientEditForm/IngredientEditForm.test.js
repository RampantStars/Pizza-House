import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IntgredientEditForm from './IngredientEditForm';

describe('<IntgredientEditForm />', () => {
  test('it should mount', () => {
    render(<IntgredientEditForm />);

    const intgredientEditForm = screen.getByTestId('IntgredientEditForm');

    expect(intgredientEditForm).toBeInTheDocument();
  });
});
