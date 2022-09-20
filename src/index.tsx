import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@src/app';
import 'normalize.css/normalize.css';
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root') ?? document.body);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
