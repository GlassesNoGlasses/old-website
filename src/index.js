import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

document.getElementsByClassName("cup")[0].addEventListener("animationend", () => {
  document.getElementsByClassName("loader-container")[0].id = "endAnim";
  document.getElementById("endAnim").classList.remove("loader-container");
}, false);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

reportWebVitals();

