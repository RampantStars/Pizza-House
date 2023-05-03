import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SizeModal from './SizeModal';

describe('<SizeModal />', () => {
  test('it should mount', () => {
    render(<SizeModal />);
    
    const sizeModal = screen.getByTestId('SizeModal');

    expect(sizeModal).toBeInTheDocument();
  });
});