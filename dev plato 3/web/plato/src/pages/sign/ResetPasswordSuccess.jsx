import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import OnlineCount from '../../components/badge/onlineCount';

export default function  ResetPasswordSuccess () {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate('/sign/in')
        }, 4000);
    },[])
  return (
    <>
      <div className="flex min-h-screen flex-col justify-center bg-slate-100 py-12 sm:px-6 lg:px-8">
        <div className="text-center sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Reset password succesfully
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Redirecting you to sign-in page now
          </p>

          <p className="mt-8 cursor-pointer text-center text-sm font-medium text-gray-600 underline">
            <Link to="/sign/in">Not redirected? Click here.</Link>
          </p>

          <OnlineCount />
        </div>
      </div>
    </>
  )
}
