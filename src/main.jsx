/**
 * @file main.jsx
 * @description Entry point for the React 19 application. Sets up virtual DOM mounting and registers global stylesheet imports.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Import core application design styles, global layout variables, and components styling
import App from './App.jsx' // Import the primary wrapper and routing App component

// Find root elements container in index.html, create virtual root, and render within strict mode
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
