import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contact from './Contact';
import About from './About';
import ErrorRoute from './ErrorRoute';
import Body from './Components/Body';
import RestroMenu from './RestroMenu';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorRoute/>,
    children: [
      {
        path: "/home",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:name/:id",
        element: <RestroMenu/>
      }
    ]
  },
])

root.render(<RouterProvider router={router}/>)