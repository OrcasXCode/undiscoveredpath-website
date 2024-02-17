import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout.jsx'
import { Home } from '../src/components/Home/Home.jsx'
import { About } from './components/About/About.jsx'
import { Contact } from './components/ContactUs/Contact.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout></Layout>,
    children:[
      {
        path:"",
        element:<Home></Home>
      },
      {
        path:"aboutus",
        element:<About></About>
      },
      {
        path:"contactus",
        element:<Contact></Contact>
      },
    ]
  }

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
      <RouterProvider router={router}></RouterProvider>

  </React.StrictMode>,
)
 