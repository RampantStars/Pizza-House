import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ManagerOrder } from './ManagerOrder';

describe('<ManagerOrder />', () => {
  test('it should mount', () => {
    render(<ManagerOrder />);

    const managerOrder = screen.getByTestId('ManagerOrder');

    expect(managerOrder).toBeInTheDocument();
  });
});
