import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import { PostCard } from '.';
import { postCardPropsMock } from './mock';

const props = postCardPropsMock;
describe('<PostCard />', () => {
  it('Should render PostCard correctly', () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole('img', { name: /title 1/i })).toHaveAttribute('src', 'img/img.png');
    expect(screen.getByRole('heading', { name: /title 1/i })).toBeInTheDocument();

    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  it('should match a snapshot', () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
