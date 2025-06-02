import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';   // Đảm bảo import file index.css
import './App.css';     // Vẫn import App.css như bình thường

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
