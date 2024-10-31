import React from 'react';
// import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'
// import { BrowserRouter } from 'react-router-dom'
// import Usercontext from './context/Usercontext.jsx'


// for contect API 
// createRoot(document.getElementById('root')).render(
//     // <BrowserRouter>
//     //      <App />
//     // </BrowserRouter>
//    <Usercontext>
//       <App/>
//    </Usercontext>
  
// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

