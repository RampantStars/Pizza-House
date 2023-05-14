import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DoughTypeModal from './DoughTypeModal';

describe('<DoughTypeModal />', () => {
  test('it should mount', () => {
    render(<DoughTypeModal />);
    
    const doughTypeModal = screen.getByTestId('DoughTypeModal');

    expect(doughTypeModal).toBeInTheDocument();
  });
});