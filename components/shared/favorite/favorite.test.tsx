import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Favorite } from './favorite';
import { useFavorites } from '@/hooks/use-favorites';

jest.mock('@/hooks/use-favorites');

describe('Favorite Component', () => {
  const mockToggleFavorite = jest.fn();
  const mockIsFavorite = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useFavorites as jest.Mock).mockReturnValue({
      isFavorite: mockIsFavorite,
      toggleFavorite: mockToggleFavorite,
    });
  });

  test('renders favorite button correctly when not a favorite', () => {
    mockIsFavorite.mockReturnValue(false);

    render(<Favorite id="device-001" />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(screen.getByText('Add to favorites')).toBeInTheDocument();
  });

  test('renders favorite button correctly when is a favorite', () => {
    mockIsFavorite.mockReturnValue(true);

    render(<Favorite id="device-001" />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(screen.getByText('Remove from favorites')).toBeInTheDocument();
  });

  test('calls toggleFavorite when button is clicked', async () => {
    const user = userEvent.setup();
    mockIsFavorite.mockReturnValue(false);

    render(<Favorite id="device-001" />);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(mockToggleFavorite).toHaveBeenCalledWith('device-001');
  });
});
