// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(

//     <App />
 
// )
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from  './pages/Loginform';
import Campaigns from './pages/Campaigns';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login></Login>
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>
  },
  {
  path: '/campaigns',
  element:<Campaigns></Campaigns>
}


]);

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <RouterProvider router={router} />

);