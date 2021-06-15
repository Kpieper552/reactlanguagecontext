import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LanguageContextProvider from "./context/LanguageContext";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <LanguageContextProvider>
        <App />
    </LanguageContextProvider>
  </React.StrictMode>,
  document.getElementById('root')

);

reportWebVitals();
