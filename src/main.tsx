import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'state-container/store';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

// 保证样式在所有组件引用的最下方，否则将导致本地和build样式引入顺序不一致
import 'tailwindcss/tailwind.css';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
