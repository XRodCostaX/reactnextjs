/* eslint-disable react/jsx-boolean-value */
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Button from '.';

describe('<Button />', () => {
  it('should render the button with the text "load more"', () => {
    const fn = vi.fn();
    render(<Button text="Load more" disabled={false} onClick={fn} />);
    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it('should call a function on button click', () => {
    const fn = vi.fn();
    render(<Button text="Load more" disabled={false} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disable when disable is true', () => {
    const fn = vi.fn();
    render(<Button text="Load more" disabled={true} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeDisabled();
  });

  it('should be enabled when disable is false', () => {
    const fn = vi.fn();
    render(<Button text="Load more" disabled={false} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeEnabled();
  });
  it('should match snapshot', () => {
    const { container } = render(<Button text="Load more" disable />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
