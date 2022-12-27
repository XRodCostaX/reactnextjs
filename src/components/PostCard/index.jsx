import P from 'prop-types';
import { Container } from './styled';

export function PostCard({ id, cover, body, title }) {
  return (
    <Container>
      <div className="post">
        <img src={cover} alt={title} />
        <div key={id} className="post-content">
          <h2>
            {title}
            {id}
          </h2>
          <p>{body}</p>
        </div>
      </div>
    </Container>
  );
}

PostCard.propTypes = {
  title: P.string.isRequired,
  cover: P.string.isRequired,
  body: P.string.isRequired,
  id: P.number.isRequired,
};
