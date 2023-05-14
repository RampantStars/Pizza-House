import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DoughTypeCreateForm from './DoughTypeCreateForm';

describe('<DoughTypeCreateForm />', () => {
  test('it should mount', () => {
    render(<DoughTypeCreateForm />);
    
    const doughTypeCreateForm = screen.getByTestId('DoughTypeCreateForm');

    expect(doughTypeCreateForm).toBeInTheDocument();
  });
});