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
      default: 'parent'
    }
  },
  {
    timestamps: true
  }
);

const Parent = mongoose.model('Parent', Schema);

const getAll = getAllCommon(Parent);
const getOne = getOneCommon(Parent);
const addOne = addOneCommon(Parent);
const editOne = editOneCommon(Parent);
const deleteOne = deleteOneCommon(Parent);
const deleteAll = deleteAllCommon(Parent);
const signIn = signInCommon(Parent);
const register = registerCommoon(Parent);
const emailCheck = emailCheckCommon(Parent);
const generateAccessToken = generateAccessTokenCommon(Parent);
const inputPassword = inputPasswordCommon(Parent);
const verifyOtp = verifyOtpCommon(Parent);
const forgotPassword = forgotPasswordCommon(Parent);

export default Parent;
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
