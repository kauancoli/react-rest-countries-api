import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './Styles/global.ts';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
