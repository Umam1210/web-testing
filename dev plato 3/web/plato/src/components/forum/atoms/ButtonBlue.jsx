import React from 'react'

const ButtonBlue = ({label, onClick}) => {
  return (
    <button onClick={onClick} class="bg-blue-500 text-sm hover:shadow-lg text-white font-bold py-1 px-5 rounded-full">
  {label}
</button>
  )
}

export default ButtonBlue