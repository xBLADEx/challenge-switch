import { render, screen } from '@testing-library/react';
import { Card } from './card';

describe('Card Component', () => {
  const mockProps = {
    id: 'device-001',
    name: 'Wireless Headphones',
    title: 'Wireless Headphones',
    price: 99.99,
    rating: 4.5,
    category: 'category-001',
    description: 'High quality wireless headphones with noise cancellation.',
  };

  test('renders card with correct information', () => {
    render(<Card {...mockProps} />);

    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(`$${mockProps.price.toFixed(2)}`)).toBeInTheDocument();
    expect(screen.getByText('Rating:')).toBeInTheDocument();
    expect(screen.getByText('Audio')).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
  });
});
