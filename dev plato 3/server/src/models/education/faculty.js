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
const { major, university } = educationLevels;

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
    majors: [major],
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

const EducationFaculty = mongoose.model('EducationFaculty', Schema);

const getAll = getAllCommon(EducationFaculty);
const getOne = getOneCommon(EducationFaculty);
const addOne = addOneCommon(EducationFaculty);
const editOne = editOneCommon(EducationFaculty);
const deleteOne = deleteOneCommon(EducationFaculty);
const deleteAll = deleteAllCommon(EducationFaculty);

export default EducationFaculty;
export { getAll, getOne, addOne, editOne, deleteOne, deleteAll };
