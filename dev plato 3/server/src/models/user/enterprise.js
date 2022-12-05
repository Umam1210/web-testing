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
      default: 'enterprise'
    },
    managedStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
  },
  {
    timestamps: true
  }
);

const Enterprise = mongoose.model('Enterprise', Schema);

const getAll = getAllCommon(Enterprise);
const getOne = getOneCommon(Enterprise);
const addOne = addOneCommon(Enterprise);
const editOne = editOneCommon(Enterprise);
const deleteOne = deleteOneCommon(Enterprise);
const deleteAll = deleteAllCommon(Enterprise);
const signIn = signInCommon(Enterprise);
const register = registerCommoon(Enterprise);
const emailCheck = emailCheckCommon(Enterprise);
const generateAccessToken = generateAccessTokenCommon(Enterprise);
const inputPassword = inputPasswordCommon(Enterprise);
const verifyOtp = verifyOtpCommon(Enterprise);
const forgotPassword = forgotPasswordCommon(Enterprise);

export default Enterprise;
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
