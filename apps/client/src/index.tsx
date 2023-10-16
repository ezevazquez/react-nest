import './index.css'
import Navbar from './components/navbar'
import Body from './components/body'
import JesiImages from './components/images'

import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <Body />
    <JesiImages />
  </React.StrictMode>,
);
