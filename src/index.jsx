import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ParolProvider } from './Components/Parol/Parol';
import { Provider as LangProvider } from './Components/Context/Localization';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ParolProvider>
        <LangProvider>
          <App />
        </LangProvider>
      </ParolProvider>
    </BrowserRouter>
  </React.StrictMode>
);