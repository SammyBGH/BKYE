import React from 'react'; // ← Required for JSX
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init({
  duration: 1000,   // animation duration (ms)
  once: true        // whether animation happens only once
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
