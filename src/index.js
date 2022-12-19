import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.start_loader').style.display = "none";  
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);