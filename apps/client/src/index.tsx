import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/navbar'
import './index.css'
import App from './components/App'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>,
);
