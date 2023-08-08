import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { NavigationProvider } from './contexts/navigation.context';
import { MenuProvider } from './contexts/menu.context';
import { FixMenuProvider } from './contexts/fix-menu.context';

// import './utils/scroll';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <FixMenuProvider>
      <MenuProvider>
        <NavigationProvider>
          <App />
        </NavigationProvider>
      </MenuProvider>
    </FixMenuProvider>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
