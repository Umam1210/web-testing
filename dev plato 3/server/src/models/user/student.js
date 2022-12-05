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
  forgotPasswordCommon,
  resetPasswordCommon
} from 'helpers/commonControllers';
import { userPublicProfile, educationData, baseUser } from 'helpers/databaseTypes';

const Schema = new mongoose.Schema(
  {
    ...baseUser,
    userType: {
      type: String,
      required: true,
      default: 'student'
    },
    parents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Parent'
      }
    ],
    publicProfile: userPublicProfile,
    educationData
  },
  {
    timestamps: true
  }
);

const Student = mongoose.model('Student', Schema);

const getAll = getAllCommon(Student);
const getOne = getOneCommon(Student);
const addOne = addOneCommon(Student);
const editOne = editOneCommon(Student);
const deleteOne = deleteOneCommon(Student);
const deleteAll = deleteAllCommon(Student);
const signIn = signInCommon(Student);
const register = registerCommoon(Student);
const emailCheck = emailCheckCommon(Student);
const generateAccessToken = generateAccessTokenCommon(Student);
const inputPassword = inputPasswordCommon(Student);
const verifyOtp = verifyOtpCommon(Student);
const forgotPassword = forgotPasswordCommon(Student);
const resetPassword = resetPasswordCommon(Student);

export default Student;
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
  forgotPassword,
  resetPassword
};
