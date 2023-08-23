import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteApp from './Routes.tsx';
import GlobalStyle from './Styles/global.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouteApp />
  </React.StrictMode>,
);
