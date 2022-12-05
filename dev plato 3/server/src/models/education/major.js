import mongoose from 'mongoose';
import {
  getAllCommon,
  getOneCommon,
  addOneCommon,
  editOneCommon,
  deleteOneCommon,
  deleteAllCommon
} from 'helpers/commonControllers';
import { educationLevels } from 'helpers/databaseTypes';
const { university, faculty, subject } = educationLevels;

const Schema = new mongoose.Schema(
  {
    folder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Folder',
      required: true
    },
    name: {
      type: String,
      required: true
    },
    university,
    faculty,
    subjects: [subject],
    flags: {
      isDeleted: {
        type: Boolean,
        default: false
      }
    }
  },
  {
    timestamps: true
  }
);

const EducationMajor = mongoose.model('EducationMajor', Schema);

const getAll = getAllCommon(EducationMajor);
const getOne = getOneCommon(EducationMajor);
const addOne = addOneCommon(EducationMajor);
const editOne = editOneCommon(EducationMajor);
const deleteOne = deleteOneCommon(EducationMajor);
const deleteAll = deleteAllCommon(EducationMajor);

export default EducationMajor;
export { getAll, getOne, addOne, editOne, deleteOne, deleteAll };
