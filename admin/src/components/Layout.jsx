import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <article className="flex ">
           <div className="flex-[1] ">
                <Sidebar />
           </div>
            <main className="flex-[6] ">
                <Navbar />
                <hr />
                <div className="px-8">
                    <Outlet />
                </div>
            </main>

        </article>

    </div>
  )
}

export default Layout