import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'
import { RouterProvider } from 'react-router';
import { Router } from './routes/Router';
import AuthProvider from './providers/AuthProvider';
import { Toaster } from 'react-hot-toast';
import 'leaflet/dist/leaflet.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Router} />
      <Toaster position='top-right'></Toaster>
    </AuthProvider>
  </StrictMode>
)