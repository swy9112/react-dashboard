import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider, QueryClient } from "react-query";
import './index.css';
import App from './App';
import { GitUserProvider } from './api';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GitUserProvider>
        <BrowserRouter>
          < App />
        </BrowserRouter>
      </GitUserProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
