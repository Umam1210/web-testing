import React from 'react';
import { useNavigate } from 'react-router-dom';
import { storeCart } from '../../store/storeCart';

export default function Payment() {
    const navigate = useNavigate()
  return (
    <div className="h0full col-span-full h-screen flex-col">
      <div className=" flex h-full items-center justify-center text-2xl font-semibold text-gray-400">
        <button onClick={() => navigate('/course')}>Proceed to payment gateway</button>
      </div>
    </div>
  );
}
