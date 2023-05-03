import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SizeCreateForm from './SizeCreateForm';

describe('<SizeCreateForm />', () => {
  test('it should mount', () => {
    render(<SizeCreateForm />);
    
    const sizeCreateForm = screen.getByTestId('SizeCreateForm');

    expect(sizeCreateForm).toBeInTheDocument();
  });
});