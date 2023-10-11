import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import Navbar from './components/navbar'
import Body from './components/body'
import JesiImages from './components/images'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <Body />
    <JesiImages />
  </React.StrictMode>,
);
