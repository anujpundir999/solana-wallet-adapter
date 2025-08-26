"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import WalletContextProvider from '@/components/WalletContextProvider'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen w-full relative bg-black">
        <div
        className="absolute inset-0 z-0"
        style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
        }}
        />
  
        <WalletContextProvider>
          <Navbar/>
            <div className='text-white text-lg bg-white'>
                Body
            </div>
          <Footer/>
        </WalletContextProvider>
    </div>
  )
}

export default page