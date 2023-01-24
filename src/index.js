import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter  } from 'react-router-dom'
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Header />
  <App />
  <Footer />
  </BrowserRouter>
);
