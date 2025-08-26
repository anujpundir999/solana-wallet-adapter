import React from 'react'

interface ButtonProps {
  label: string;
}

const Button = ({label}: ButtonProps) => {
  return (
    <button className="rounded-sm bg-blue-500 text-white py-2 px-4">{label}</button>
  )
}

export default Button