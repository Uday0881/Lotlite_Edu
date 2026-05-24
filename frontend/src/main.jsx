import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Apply saved theme mode on initial load
const savedMode = localStorage.getItem('lotlite-mode') || 'dark'
document.documentElement.classList.add(savedMode)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
