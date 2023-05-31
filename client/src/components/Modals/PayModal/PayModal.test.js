import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PayModal from './PayModal';

describe('<PayModal />', () => {
  test('it should mount', () => {
    render(<PayModal />);
    
    const payModal = screen.getByTestId('PayModal');

    expect(payModal).toBeInTheDocument();
  });
});