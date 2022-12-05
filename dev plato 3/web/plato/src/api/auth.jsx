import axios from 'axios';
import { Server } from '../helpers/api';

export const signIn = async ({ queryKey }) => {
  const { email, password, role } = queryKey[1];
  const response = await Server({
    method: 'post',
    url: `user/${role}/sign-in`,
    data: {
      email,
      password
    }
  });
  const { token } = response.data;
  return token;
};

export const userForgetPassword = async (email) => {
  const response = await axios.post(`http://localhost:8081/user/student/forgot-password`,{
    email
  });
  const {data} = response.data
  return data
};


export const PostOtp = async ({role, token, urlOtpCode}) => {
  const response = await axios.post(`http://localhost:8081/user/${role}/verify-otp`, {
    token: token,
    urlOtpCode: urlOtpCode
  });
  return response.data
  // setStatus(response.data);
};


export const Reset = async ({token, resetToken, password, confirmPassword}) => {
  await axios.post(`http://localhost:8081/user/student/reset-password`, {
    token: token,
    resetToken: resetToken,
    password: password,
    confirmPassword: confirmPassword
  });
};
