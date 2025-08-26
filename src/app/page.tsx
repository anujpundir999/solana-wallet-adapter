"use client"
import { BalanceDisplay } from '@/components/BalanceDisplay'
import Button from '@/components/Button'
import { Card } from '@/components/Card'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { PingButton } from '@/components/PingButton'
import WalletContextProvider from '@/components/WalletContextProvider'
import React, { useState } from 'react'

const page = () => {
  const [amount, setAmount] = useState(0);
  const [recipient, setRecipient] = useState("");

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Sending", amount, "SOL to", recipient);

  }

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
            <div className="flex items-center justify-center py-2 m-4">
                <BalanceDisplay/>
            </div>
            <div className="flex items-center justify-center py-2 m-4">
              <PingButton/>
            </div>
            <div>
              <Card title={"Sol Transfer"} >
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
                  <p className="text-lg font-semibold text-white">Amount to Send:</p>
                  <input 
                  type="number" 
                  className="w-full p-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400" 
                  onChange={(e) => setAmount(Number(e.target.value))} 
                  placeholder="Amount in SOL" 
                  />
                  <p className="text-lg font-semibold text-white">Recipient's Wallet Address:</p>
                  <input 
                  type="text" 
                  className="w-full p-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400" 
                  onChange={(e) => setRecipient(e.target.value)} 
                  placeholder="Wallet Address" 
                  />
                  <div className="flex justify-center">
                  <Button type={"submit"} label={"Send"}  />
                  </div>
                </form>
              </Card>
            </div>
          <Footer/>
        </WalletContextProvider>
    </div>
  )
}

export default page