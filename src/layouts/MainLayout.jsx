import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div>
      {/* Navbar - max-w-8xl applied only here */}
      <div className="max-w-8xl mx-auto">
        <Navbar />
      </div>

      {/* Dynamic Section */}
      <div className="min-h-[calc(100vh-335px)] container mx-auto px-12"> 
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

