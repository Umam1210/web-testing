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
const { faculty, major, subject, classRoom, university, section } = educationLevels;

const Schema = new mongoose.Schema(
  {
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
    teachers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' }],
    folder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Folder'
    },
    name: String,
    university,
    faculty,
    major,
    subject,
    sections: [section],
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

const EducationClassRoom = mongoose.model('EducationClassRoom', Schema);

const getAll = getAllCommon(EducationClassRoom);
const getOne = getOneCommon(EducationClassRoom);
const addOne = addOneCommon(EducationClassRoom);
const editOne = editOneCommon(EducationClassRoom);
const deleteOne = deleteOneCommon(EducationClassRoom);
const deleteAll = deleteAllCommon(EducationClassRoom);

export default EducationClassRoom;
export { getAll, getOne, addOne, editOne, deleteOne, deleteAll };
