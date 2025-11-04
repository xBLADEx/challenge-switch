import '@testing-library/jest-dom';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveValue(expected: string | number | string[]): R;
      toHaveTextContent(expected: string | RegExp): R;
      toBeVisible(): R;
      toBeDisabled(): R;
      toHaveClass(expected: string): R;
      toHaveAttribute(attr: string, value?: string): R;
    }
  }
}
