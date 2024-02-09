import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout.jsx'
import { Home } from './components/Home/Home.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout></Layout>,
    children:[
      {
        path:"",
        element:<Home></Home>
      },
    ]
  }

])

// const store = configureStore({
//   reducer:rootReducer
// })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <RouterProvider router={router}></RouterProvider>
    {/* </Provider> */}
  </React.StrictMode>,
)
 