import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

window.addEventListener("load", () => {
  document.getElementsByClassName("cup")[0].addEventListener("animationend", () => {
    document.getElementsByClassName("loader-container")[0].id = "endAnim";
    setTimeout(() => {
      document.getElementById("endAnim").remove()
    },2000);
  }, false);
});

reportWebVitals();

