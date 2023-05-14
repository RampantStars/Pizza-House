import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AdminDoughType from './AdminDoughType';

describe('<AdminDoughType />', () => {
  test('it should mount', () => {
    render(<AdminDoughType />);
    
    const adminDoughType = screen.getByTestId('AdminDoughType');

    expect(adminDoughType).toBeInTheDocument();
  });
});