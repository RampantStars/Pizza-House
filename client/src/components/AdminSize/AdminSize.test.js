import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AdminSize from './AdminSize';

describe('<AdminSize />', () => {
  test('it should mount', () => {
    render(<AdminSize />);
    
    const adminSize = screen.getByTestId('AdminSize');

    expect(adminSize).toBeInTheDocument();
  });
});