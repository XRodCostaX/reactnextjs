import styled from 'styled-components';

export const Container = styled.div`
  .posts {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    height: 100%;
    gap: 30px;
  }
`;
