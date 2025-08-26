import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import {FC, useEffect, useState } from 'react'
import Button from './Button';

export const BalanceDisplay: FC = () => {
    const [balance, setBalance] = useState(0);
    const { connection } = useConnection();
    const { publicKey } = useWallet();

    useEffect(() => {
        async function getBalance() { 
            if (publicKey) {
                const balance = await connection.getBalance(publicKey);
                setBalance(balance);
            }
        }
        getBalance();
        }, [connection, publicKey])

    return (
            <Button label={`Balance: ${balance / LAMPORTS_PER_SOL} SOL`}/>
    )
}