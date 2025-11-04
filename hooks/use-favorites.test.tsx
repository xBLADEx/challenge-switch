import { renderHook, act } from '@testing-library/react';
import { useFavorites } from './use-favorites';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('useFavorites Hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorageMock.getItem.mockReturnValue(null);
  });

  test('adds and removes favorites', () => {
    const { result } = renderHook(() => useFavorites());

    act(() => {
      result.current.addFavorite('item-001');
    });

    expect(result.current.isFavorite('item-001')).toBe(true);
    expect(result.current.favoritesCount).toBe(1);

    act(() => {
      result.current.removeFavorite('item-001');
    });

    expect(result.current.isFavorite('item-001')).toBe(false);
    expect(result.current.favoritesCount).toBe(0);
  });

  test('loads favorites from localStorage', () => {
    localStorageMock.getItem.mockReturnValue('["item-001", "item-002"]');

    const { result } = renderHook(() => useFavorites());

    expect(result.current.favorites).toEqual(['item-001', 'item-002']);
  });
});
