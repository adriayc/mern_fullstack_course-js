import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
// Custom axios
import customFetch from './utils/customFetch.js';

const resp = await customFetch.get('/test');
console.log(resp);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
