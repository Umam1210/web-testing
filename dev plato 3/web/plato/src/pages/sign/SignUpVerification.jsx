import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { PostOtp } from '../../api/auth';
import OnlineCount from '../../components/badge/onlineCount';

export default function SignUpVerification() {
  const { token } = useParams();
  const tokenVerify = localStorage.getItem('tokenSignUp');
  const role = localStorage.getItem('role');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  // const PostOtp = async () => {
  //   const response = await axios.post(`http://localhost:8081/user/${role}/verify-otp`, {
  //     token: tokenVerify,
  //     urlOtpCode: token
  //   });
  //   setStatus(response.data);
  // };

  // useEffect(() => {
  //   PostOtp();
  //   if (status.message === 'Verifikasi akun berhasil') {
  //     setTimeout(() => {
  //       navigate('/sign/in');
  //     }, 2000);
  //   }
  // }, [token, tokenVerify, role]);

  const { mutate, isLoading, isSuccess } = useMutation(PostOtp, {
    onSuccess: (data) => {
      setStatus(data);
    }
  });

  useEffect(() => {
    mutate({ token: tokenVerify, urlOtpCode: token, role: role });
    if (status.message === 'Verifikasi akun berhasil') {
      setTimeout(() => {
        navigate('/sign/in');
      }, 2000);
    }
  }, [token, tokenVerify, role]);

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
            {status?.message === 'Verifikasi akun berhasil'
              ? 'Your email has been verified'
              : 'Your email has not verified'}
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
  );
}
