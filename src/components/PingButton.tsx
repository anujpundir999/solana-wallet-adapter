import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  PublicKey,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import { FC, useState } from "react";
import Button from "./Button";

export const PingButton: FC = () => {
    const [sign,setSign] = useState<string | null>(null);
    const PROGRAM_ID = "ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa";
    const DATA_ACCOUNT_PUBKEY = "Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod";
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    const onClick = async () => {
        if (!connection || !publicKey) {
        console.error("Wallet not connected or connection unavailable");
        return;
        }

        try {
            const programId = new PublicKey(PROGRAM_ID);
            const programDataAccount = new PublicKey(DATA_ACCOUNT_PUBKEY);
            const transaction = new Transaction();

            const instruction = new TransactionInstruction({
            keys: [
                {
                pubkey: programDataAccount,
                isSigner: false,
                isWritable: true,
                },
            ],
            programId,
            });

            transaction.add(instruction);

            const signature = await sendTransaction(transaction, connection);
            setSign(signature);
            console.log("Transaction Signature:", signature);
        } catch (error) {
        console.error("Transaction failed:", error);
        }
    };

  return (
    <div className="flex" >
        <Button label="Ping" onClick={onClick} />
        {sign && <span className="text-white">
            <Button  label="View on explorer" onClick={() => window.open(`https://explorer.solana.com/tx/${sign}?cluster=devnet`, "_blank")} />
        </span>}
    </div>
  );
};