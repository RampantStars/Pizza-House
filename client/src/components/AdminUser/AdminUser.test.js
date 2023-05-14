import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AdminUser from './AdminUser';

describe('<AdminUser />', () => {
  test('it should mount', () => {
    render(<AdminUser />);
    
    const adminUser = screen.getByTestId('AdminUser');

    expect(adminUser).toBeInTheDocument();
  });
});