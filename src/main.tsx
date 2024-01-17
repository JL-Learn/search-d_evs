import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Repos from './routes/Repos.tsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Rotas de páginas
import Home from './routes/home.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/perfil/:username",
        element: <Repos />,
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);