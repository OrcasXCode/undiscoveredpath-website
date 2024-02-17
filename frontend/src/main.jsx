import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout.jsx'
import { Home } from '../src/components/Home/Home.jsx'
import { About } from './components/About/About.jsx'
import { Contact } from './components/ContactUs/Contact.jsx'
import { Error } from './components/Error/Error.jsx'
import { Recruitment } from './components/Recruitment/Recruitment.jsx'
import { Error1 } from './components/Error/Error1.jsx'

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
      {
        path:"error",
        element:<Error></Error>
      },
      {
        path:"error-recruitment",
        element:<Error1></Error1>
      },
      {
        path:"recruitment",
        element:<Recruitment></Recruitment>
      },
    ]
  }

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
      <RouterProvider router={router}></RouterProvider>

  </React.StrictMode>,
)
 