import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';         // Global styles
import App from './App';      // Main App component
import reportWebVitals from './reportWebVitals';

// Create a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Measure performance in production (e.g., reportWebVitals(console.log))
reportWebVitals();
