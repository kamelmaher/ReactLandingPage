import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter , Route , createRoutesFromElements , RouterProvider} from "react-router-dom"
import Layout from './Layout.tsx'
import Signin from './components/Signin.tsx'
import SignUp from './components/SignUp.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<App />}></Route>
      <Route path='/signin' element={<Signin />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
