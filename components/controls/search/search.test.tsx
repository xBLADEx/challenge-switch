import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Search } from '@/components/controls/search/search';

describe('Search Component', () => {
  const mockOnSearch = jest.fn();
  const mockOnClearSearch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('calls onSearch when search button is clicked', async () => {
    const user = userEvent.setup();

    render(<Search onSearch={mockOnSearch} onClearSearch={mockOnClearSearch} />);

    const input = screen.getByPlaceholderText(/search devices/i);
    const button = screen.getByRole('button', { name: /search/i });

    await user.type(input, 'wireless headphones');
    await user.click(button);

    expect(mockOnSearch).toHaveBeenCalledWith('wireless headphones');
  });

  test('clears input after search is applied', async () => {
    render(<Search onSearch={mockOnSearch} onClearSearch={mockOnClearSearch} />);

    const input = screen.getByPlaceholderText(/search devices/i);
    const searchButton = screen.getByRole('button', { name: /search/i });

    await userEvent.type(input, 'keyboard');
    expect(input).toHaveValue('keyboard');

    await userEvent.click(searchButton);

    // Input should be cleared after search
    expect(input).toHaveValue('');
    expect(mockOnSearch).toHaveBeenCalledWith('keyboard');
  });

  test('shows applied search term and clear button', async () => {
    render(<Search onSearch={mockOnSearch} onClearSearch={mockOnClearSearch} />);

    const input = screen.getByPlaceholderText(/search devices/i);
    const searchButton = screen.getByRole('button', { name: /search/i });

    // Apply a search
    await userEvent.type(input, 'headphones');
    await userEvent.click(searchButton);

    // Should show the search bubble
    expect(screen.getByText('headphones')).toBeInTheDocument();

    // Should show clear button (accessible via screen reader text)
    const clearButton = screen.getByText(/clear search for headphones/i);
    expect(clearButton).toBeInTheDocument();

    // Click clear button
    await userEvent.click(clearButton);
    expect(mockOnClearSearch).toHaveBeenCalled();
  });
});
