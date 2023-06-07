import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Manager } from './Manager';

describe('<Manager />', () => {
  test('it should mount', () => {
    render(<Manager />);

    const manager = screen.getByTestId('Manager');

    expect(manager).toBeInTheDocument();
  });
});
