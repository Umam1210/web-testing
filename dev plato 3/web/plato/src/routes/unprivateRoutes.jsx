import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const UnprivateRoutes = () => {
  let auth = { token: false }; // change auth to localStorage get.
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.token) {
      navigate('/');
    }
  }, []);

  return <Outlet />;
};

export default UnprivateRoutes;
