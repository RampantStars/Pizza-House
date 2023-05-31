import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PayForm from './PayForm';

describe('<PayForm />', () => {
  test('it should mount', () => {
    render(<PayForm />);
    
    const payForm = screen.getByTestId('PayForm');

    expect(payForm).toBeInTheDocument();
  });
});