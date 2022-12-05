import axios from 'axios';
const baseURI = 'user/student';


export const signIn = async ({email, password}) => {
  const response = await axios.post(`http://localhost:8081/${baseURI}/sign-in`, {
    email,
    password
  });
  return response.data
};
