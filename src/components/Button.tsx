import React from 'react'

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "submit" ;
}

const Button = ({label,onClick,type}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 m-2 rounded-lg shadow-lg bg-gradient-to-br from-white/30 to-black/20 backdrop-blur-md border border-white/30 text-white font-semibold transition hover:scale-105 hover:shadow-xl"
      type={type}
      style={{
      WebkitBackdropFilter: 'blur(8px)',
      backdropFilter: 'blur(8px)',
      color: '#fff',
      border: '1px solid rgba(255,255,255,0.3)',
      boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
      }}
    >
      {label}
    </button>
  )
}

export default Button