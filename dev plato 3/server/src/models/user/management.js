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
  generateAccessTokenCommon,
  emailCheckCommon,
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
      default: 'management'
    }
  },
  {
    timestamps: true
  }
);

const Management = mongoose.model('Management', Schema);

const getAll = getAllCommon(Management);
const getOne = getOneCommon(Management);
const addOne = addOneCommon(Management);
const editOne = editOneCommon(Management);
const deleteOne = deleteOneCommon(Management);
const deleteAll = deleteAllCommon(Management);
const signIn = signInCommon(Management);
const register = registerCommoon(Management);
const emailCheck = emailCheckCommon(Management);
const generateAccessToken = generateAccessTokenCommon(Management);
const inputPassword = inputPasswordCommon(Management);
const verifyOtp = verifyOtpCommon(Management);
const forgotPassword = forgotPasswordCommon(Management);

export default Management;
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
