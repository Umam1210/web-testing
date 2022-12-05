import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const PrivateRoutes = () => {
  const tokenUser = localStorage.getItem('token');
  // console.log(tokenUser,">>>>")
  let auth = { token: true }; // change auth to localStorage get.
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.token) {
      navigate('/sign-in');
    }
  }, []);

  return <Outlet />;
};

export default PrivateRoutes;
