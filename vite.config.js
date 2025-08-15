// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),
//     tailwindcss() ],
//     base:'/Portfolio/'
// })


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Import BrowserRouter from react-router-dom
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

// The root element where the React app will be mounted.
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Render the application
root.render(
  <StrictMode>
    {/* Wrap the App component with BrowserRouter and set the basename */}
    <BrowserRouter basename="/Portfolio/">
      <App />
    </BrowserRouter>
  </StrictMode>
);
