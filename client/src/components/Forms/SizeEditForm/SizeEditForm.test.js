import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SizeEditForm from './SizeEditForm';

describe('<SizeEditForm />', () => {
  test('it should mount', () => {
    render(<SizeEditForm />);
    
    const sizeEditForm = screen.getByTestId('SizeEditForm');

    expect(sizeEditForm).toBeInTheDocument();
  });
});