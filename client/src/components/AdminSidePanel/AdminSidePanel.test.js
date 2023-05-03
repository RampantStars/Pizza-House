import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AdminSidePanel from './AdminSidePanel';

describe('<AdminSidePanel />', () => {
  test('it should mount', () => {
    render(<AdminSidePanel />);
    
    const adminSidePanel = screen.getByTestId('AdminSidePanel');

    expect(adminSidePanel).toBeInTheDocument();
  });
});