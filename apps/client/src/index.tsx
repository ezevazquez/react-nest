import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/navbar'
import App from './components/app'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>,
);
