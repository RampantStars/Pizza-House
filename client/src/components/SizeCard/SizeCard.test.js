import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SizeCard from './SizeCard';

describe('<SizeCard />', () => {
  test('it should mount', () => {
    render(<SizeCard />);
    
    const sizeCard = screen.getByTestId('SizeCard');

    expect(sizeCard).toBeInTheDocument();
  });
});