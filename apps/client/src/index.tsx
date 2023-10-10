import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/navbar'
import Body from './components/body'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <Body />
  </React.StrictMode>,
);
