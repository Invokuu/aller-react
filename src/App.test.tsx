import React from 'react';
import {render, screen} from '@testing-library/react';
import {Article} from './components/Article';

// I have written one test case for Article component, but not focused on this

test('render article', () => {
  // Data to pass into Article component
  const data = {
    type: 'Article',
    width: 12,
    url: 'https://example.com/',
    title: 'This is my title',
    imageUrl: 'https://example.com/image.jpg'
  };
  // Test the component
  render(<Article data={data} />);
  const titleElement = screen.getByText(/This is my title/i);
  expect(titleElement).toBeInTheDocument();
});
