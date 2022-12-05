import mongoose from 'mongoose';
import {
  getAllCommon,
  getOneCommon,
  addOneCommon,
  editOneCommon,
  deleteOneCommon,
  deleteAllCommon,
  signInCommon,
  registerCommoon,
  emailCheckCommon,
  generateAccessTokenCommon,
  inputPasswordCommon,
  verifyOtpCommon,
  forgotPasswordCommon
} from 'helpers/commonControllers';
import { baseUser } from 'helpers/databaseTypes';

const Schema = new mongoose.Schema(
  {
    ...baseUser,
    userType: {
      type: String,
      required: true,
      default: 'admin'
    }
  },
  {
    timestamps: true
  }
);

const Admin = mongoose.model('Admin', Schema);

const getAll = getAllCommon(Admin);
const getOne = getOneCommon(Admin);
const addOne = addOneCommon(Admin);
const editOne = editOneCommon(Admin);
const deleteOne = deleteOneCommon(Admin);
const deleteAll = deleteAllCommon(Admin);
const signIn = signInCommon(Admin);
const register = registerCommoon(Admin);
const emailCheck = emailCheckCommon(Admin);
const generateAccessToken = generateAccessTokenCommon(Admin);
const inputPassword = inputPasswordCommon(Admin);
const verifyOtp = verifyOtpCommon(Admin);
const forgotPassword = forgotPasswordCommon(Admin);

export default Admin;
export {
  getAll,
  getOne,
  addOne,
  editOne,
  deleteOne,
  deleteAll,
  signIn,
  register,
  emailCheck,
  generateAccessToken,
  inputPassword,
  verifyOtp,
  forgotPassword
};
