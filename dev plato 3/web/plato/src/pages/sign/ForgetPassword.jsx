import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import OnlineCount from '../../components/badge/onlineCount';
import { useState, useEffect } from 'react';
import { userForgetPassword } from '../../api/auth';

export default function ForgetPassword() {
  const queryClient = useQueryClient();
  const [email, setEmail] = useState('')

  const { mutate, isLoading, isSuccess } = useMutation(userForgetPassword, {
    onSuccess: (data) => {
      localStorage.setItem('resetPassword', data);
      alert("silakan check email")
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(email);
    setEmail('');
  };

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
            Don't worry!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We will send you a link to reset your password.
          </p>

          <OnlineCount />
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <Link to="/sign/in" className="font-medium text-indigo-600 hover:text-indigo-500">
                    I want to sign in
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className=" flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Reset my password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
