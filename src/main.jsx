import React from 'react';
import ReactDom from 'react-dom/client'
//import App from './App.jsx'
//import './index.css'
import './Qrcode.css'
import Qrcode from './Qrcode';


ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
    <Qrcode/>
  </React.StrictMode>
);
