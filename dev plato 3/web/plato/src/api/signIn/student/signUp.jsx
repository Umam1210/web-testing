import axios from 'axios';
const baseURI = 'user/student';


export const signUp = async ({email, password}) => {
    const response = await axios.post(`http://localhost:8081/${baseURI}/register`, {
      email,
      password,
    });
    return response.data.data
  };