import React from 'react'
import Navbar from '../components/navbar'

export default function RootLayout({ children }) {
  return (
    <>
        <div>
            {/* Navbar */}
            <header>
                <Navbar />
            </header>
        </div>
        <div>
            {children}
        </div>
    </>
  )
}
