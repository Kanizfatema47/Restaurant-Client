import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, RouterProvider } from 'react-router'
import { router } from './Routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className=' max-w-screen-xl mx-auto'>
      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>

      </HelmetProvider>
    </div>
  </StrictMode>,
)
