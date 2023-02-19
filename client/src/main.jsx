import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import Login from './components/Login'
import CreateAccount from './components/CreateAccount'

import {  
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={
          createBrowserRouter(
              createRoutesFromElements(
                  <Route path="/" element={<App />}>
              
                    <Route index element={<Login />}></Route>  
                    <Route path="create-account" element={<CreateAccount />} />

                  </Route>
              )
          )
      } />
  </React.StrictMode>
);