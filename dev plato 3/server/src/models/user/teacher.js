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
import { userPublicProfile, educationData, baseUser } from 'helpers/databaseTypes';

const Schema = new mongoose.Schema(
  {
    ...baseUser,
    userType: {
      type: String,
      required: true,
      default: 'teacher'
    },
    publicProfile: userPublicProfile,
    educationData
  },
  {
    timestamps: true
  }
);

const Teacher = mongoose.model('Teacher', Schema);

const getAll = getAllCommon(Teacher);
const getOne = getOneCommon(Teacher);
const addOne = addOneCommon(Teacher);
const editOne = editOneCommon(Teacher);
const deleteOne = deleteOneCommon(Teacher);
const deleteAll = deleteAllCommon(Teacher);
const signIn = signInCommon(Teacher);
const register = registerCommoon(Teacher);
const emailCheck = emailCheckCommon(Teacher);
const generateAccessToken = generateAccessTokenCommon(Teacher);
const inputPassword = inputPasswordCommon(Teacher);
const verifyOtp = verifyOtpCommon(Teacher);
const forgotPassword = forgotPasswordCommon(Teacher);

export default Teacher;
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
