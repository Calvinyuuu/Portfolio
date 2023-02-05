import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Components/Main';
import Header from './Components/Header';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="flex flex-col h-full">
      <Header />
      <Main />  
      <Footer />
    </div>
  </React.StrictMode>
);