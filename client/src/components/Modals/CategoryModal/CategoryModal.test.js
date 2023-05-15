import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CategoryModal from './CategoryModal';

describe('<CategoryModal />', () => {
  test('it should mount', () => {
    render(<CategoryModal />);
    
    const categoryModal = screen.getByTestId('CategoryModal');

    expect(categoryModal).toBeInTheDocument();
  });
});