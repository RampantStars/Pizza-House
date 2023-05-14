import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DoughTypeEditForm from './DoughTypeEditForm';

describe('<DoughTypeEditForm />', () => {
  test('it should mount', () => {
    render(<DoughTypeEditForm />);
    
    const doughTypeEditForm = screen.getByTestId('DoughTypeEditForm');

    expect(doughTypeEditForm).toBeInTheDocument();
  });
});