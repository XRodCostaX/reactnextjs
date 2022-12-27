import styled from 'styled-components';

export const Container = styled.div`
  .button {
    width: 100%;
    background:darkblue ;
    display: inline;
    color: white;
    border: none;
    padding: 15px 30px;
    cursor: pointer;
  }

  .button:disabled {
    background: #888;
    cursor: not-allowed;

  }
`;
