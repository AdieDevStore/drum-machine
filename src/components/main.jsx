import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import MPCBody from './MPCBody'
import MPCScreen from './MPCScreen'
import '../styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <MPCBody />
    <MPCScreen />
  </React.StrictMode>,
)
