import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/Global-Styles';
import { Home } from './templates/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>,
);
