import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AdminController from './AdminController';

describe('<AdminController />', () => {
  test('it should mount', () => {
    render(<AdminController />);
    
    const adminController = screen.getByTestId('AdminController');

    expect(adminController).toBeInTheDocument();
  });
});