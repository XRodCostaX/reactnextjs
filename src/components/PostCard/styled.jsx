import styled from 'styled-components';

export const Container = styled.div`
  .post {
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .post:hover {
    transform: scale(1.05);
  }

  .post-content {
    padding: 30px;
  }
  .post img {
    max-width: 100%;
  }

`;
