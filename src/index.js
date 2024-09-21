import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contact from './Contact';
import About from './About';
import ErrorRoute from './ErrorRoute';
import Body from './Components/Body';
import RestroMenu from "./Components/RestroMenu";
import { createBrowserRouter, RouterProvider }from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Shimmer from './Components/Shimmer';



const root = ReactDOM.createRoot(document.getElementById('root'));
const Grocery = lazy(()=> import("./Components/Grocery"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorRoute/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
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
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<Shimmer width="1000" height="300"/>}>
         <Grocery />
        </Suspense>
      }
    ]
  },
])

root.render(<RouterProvider router={router}/>)