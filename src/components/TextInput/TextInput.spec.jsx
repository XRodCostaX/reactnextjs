import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, vi } from 'vitest';
import { TextInput } from '.';

describe('<TextInput />', () => {
  it('should have a value of searchValue', () => {
    const fn = vi.fn();

    const { debug } = render(<TextInput handleChange={fn} searchValue="testando" />);
    const input = screen.getByPlaceholderText(/type your search/i);
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('testando');
    debug();
  });
  it('should call a handleChange function on each key pressed', async () => {
    const fn = vi.fn();

    render(<TextInput handleChange={fn} />);
    const input = screen.getByPlaceholderText(/Type your Search/i);
    const user = userEvent.setup();
    const value = 'o valor';

    await user.type(input, value);
    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match snapshot', () => {
    const fn = vi.fn();

    const { container } = render(<TextInput handleChange={fn} searchValue="" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
