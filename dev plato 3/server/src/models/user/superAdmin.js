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
  inputPasswordCommon,
  verifyOtpCommon,
  forgotPasswordCommon,
  emailCheckCommon
} from 'helpers/commonControllers';
import { baseUser } from 'helpers/databaseTypes';

const Schema = new mongoose.Schema(
  {
    ...baseUser,
    userType: {
      type: String,
      required: true,
      default: 'superAdmin'
    }
  },
  {
    timestamps: true
  }
);

const SuperAdmin = mongoose.model('SuperAdmin', Schema);

const getAll = getAllCommon(SuperAdmin);
const getOne = getOneCommon(SuperAdmin);
const addOne = addOneCommon(SuperAdmin);
const editOne = editOneCommon(SuperAdmin);
const deleteOne = deleteOneCommon(SuperAdmin);
const deleteAll = deleteAllCommon(SuperAdmin);
const signIn = signInCommon(SuperAdmin);
const register = registerCommoon(SuperAdmin);
const emailCheck = emailCheckCommon(SuperAdmin);
const generateAccessToken = generateAccessTokenCommon(SuperAdmin);
const inputPassword = inputPasswordCommon(SuperAdmin);
const verifyOtp = verifyOtpCommon(SuperAdmin);
const forgotPassword = forgotPasswordCommon(SuperAdmin);

export default SuperAdmin;
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
