import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CategoryCreateForm from './CategoryCreateForm';

describe('<CategoryCreateForm />', () => {
  test('it should mount', () => {
    render(<CategoryCreateForm />);
    
    const categoryCreateForm = screen.getByTestId('CategoryCreateForm');

    expect(categoryCreateForm).toBeInTheDocument();
  });
});