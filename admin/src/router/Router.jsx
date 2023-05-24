import React from 'react'
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import Layout from '../components/Layout'
import Dashboard from '../pages/Dashboard'
import Users from '../pages/Users'
import Companies from '../pages/Companies'
import Tripes from '../pages/Tripes'
import Tickets from '../pages/Tickets'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Dashboard/>} />
      <Route path='users' element={<Users/>} />
      <Route path='companies' element={<Companies/>} />
      <Route path='tripes' element={<Tripes/>} />
      <Route path='tickets' element={<Tickets/>} />


    </Route>
  )
)


const Router = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Router