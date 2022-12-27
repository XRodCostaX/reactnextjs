/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import P from 'prop-types';
import { PostCard } from '../PostCard';

import { Container } from './styled';

export default function Posts({ posts = [] }) {
  return (
    <Container>
      <div className="posts">
        {posts.map((post) => (
          <PostCard key={post.id} title={post.title} body={post.body} id={`  ${post.id}`} cover={post.cover} />
        ))}
      </div>
    </Container>
  );
}

Posts.defaultProps = {
  posts: [],
};
Posts.propTypes = {
  post: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      cover: P.string.isRequired,
      body: P.string.isRequired,
      id: P.number.isRequired,
    }),
  ),
};
