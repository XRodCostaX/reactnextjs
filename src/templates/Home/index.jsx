import { useCallback, useEffect, useState } from 'react';
import Button from '../../components/Button';
import Posts from '../../components/Posts';
import { TextInput } from '../../components/TextInput';
import LoadPost from '../../utils/load-posts';
import Container from './styled';

export function Home() {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(3);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPost = searchValue
    ? allPosts.filter((post) => post.title.toLowerCase().includes(searchValue.toLowerCase()))
    : posts;

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await LoadPost();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const loadMorePost = () => {
    const nextPage = page + postsPerPage;
    const nextPost = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPost);

    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <Container>
      <div className="container">
        <div className="search-input">
          {!!searchValue && <h1>Search value: {searchValue}</h1>}

          <TextInput searchValue={searchValue} handleChange={handleChange} />
        </div>
        {filteredPost.length > 0 && <Posts posts={filteredPost} />}

        {filteredPost.length === 0 && <p>Não há resultados para essa busca</p>}

        <Posts posts={filteredPost} />
        <div className="button-container">
          {!searchValue && <Button text="Load more Post" onClick={loadMorePost} disabled={noMorePosts} />}
        </div>
      </div>
    </Container>
  );
}
