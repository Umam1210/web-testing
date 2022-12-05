import express from 'express';
const route = express.Router();
import Authentication from 'middlewares/authentication';

import {
  getAll,
  getOne,
  addOne,
  deleteOne,
  deleteAll,
  editOne,
  signIn,
  register,
  emailCheck,
  generateAccessToken,
  inputPassword,
  verifyOtp,
  forgotPassword
} from 'models/user/admin';

// import Authentication from 'middlewares/authentication';

route.get('/', getAll);
route.get('/:id', getOne);
route.post('/', addOne);
// route.patch('/:id', Authentication, editOne);
// route.delete('/:id', Authentication, deleteOne);
route.patch('/:id', editOne);
route.delete('/delete-all', deleteAll);
route.delete('/:id', deleteOne);

route.post('/register', register);
route.post('/sign-in', signIn);
route.post('/email-check', emailCheck)
route.post('/refresh-token', Authentication, generateAccessToken)
route.post('/input-password', inputPassword)
route.post('/verify-otp', verifyOtp)
route.post('/forgot-password', forgotPassword)

export default route;
