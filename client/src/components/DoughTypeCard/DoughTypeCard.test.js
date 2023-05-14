import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DoughTypeCard from './DoughTypeCard';

describe('<DoughTypeCard />', () => {
  test('it should mount', () => {
    render(<DoughTypeCard />);
    
    const doughTypeCard = screen.getByTestId('DoughTypeCard');

    expect(doughTypeCard).toBeInTheDocument();
  });
});