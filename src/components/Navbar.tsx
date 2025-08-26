"use client"
import React from 'react'
import Image from 'next/image';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full max-w-6xl my-2 mx-auto p-4 gap-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
        <div className="flex items-center gap-3">
            <Image src="/pfp.jpg" alt="Solana Logo" width={48} height={48} className="rounded-md" />
            <div className="text-white font-semibold">Wallet Adapter</div>
        </div>
        <WalletMultiButton className="rounded-md bg-white/20 hover:bg-white/30 border border-white/10 backdrop-blur-sm" />
    </nav>
  )
}

export default Navbar