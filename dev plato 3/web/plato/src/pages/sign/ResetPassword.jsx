import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Reset } from '../../api/auth';

import OnlineCount from '../../components/badge/onlineCount';

export default function ResetPassword() {
  const { token } = useParams();
  const urlResetToken = localStorage.getItem('resetPassword');
  const navigate = useNavigate();

  const [password, setPassword] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');

  // const Reset = async () => {
  //   await axios.post(`http://localhost:8081/user/student/reset-password`, {
  //     token: urlResetToken,
  //     resetToken: token,
  //     password: password,
  //     confirmPassword: confirmPassword
  //   });
  //   navigate('/sign/reset-success');
  // };

  const { mutate, isLoading } = useMutation(Reset, {
    onSuccess: () => {
      navigate('/sign/reset-success');
      localStorage.removeItem('resetPassword');
    }
  });

  const resetPasswordHandler = (e) => {
    e.preventDefault();
    mutate({
      token: urlResetToken,
      resetToken: token,
      password: password,
      confirmPassword: confirmPassword
    });
    setPassword('');
    setConfirmPassword('');
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
            Create new Password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Your new password must be different from previous used passwords
          </p>
          <OnlineCount />
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST" onSubmit={resetPasswordHandler}>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Confirm your password <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
              {/* 
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    onClick={() => setCheck(!check)}
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="agreement" className="ml-2 block text-sm text-gray-900">
                    I agree to Plato's{' '}
                    <Link href="#" className="underline">
                      terms of service
                    </Link>{' '}
                    and{' '}
                    <Link href="#" className="underline">
                      privacy policy
                    </Link>
                    .
                  </label>
                </div>
              </div> */}

              <div>
                <button
                  disabled={password === '' || password !== confirmPassword}
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
