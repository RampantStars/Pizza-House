import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserControls from './UserControls';

describe('<UserControls />', () => {
  test('it should mount', () => {
    render(<UserControls />);
    
    const userControls = screen.getByTestId('UserControls');

    expect(userControls).toBeInTheDocument();
  });
});