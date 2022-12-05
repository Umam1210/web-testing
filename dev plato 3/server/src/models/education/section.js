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
const { faculty, major, subject, classRoom, university, schedule } = educationLevels;

const Schema = new mongoose.Schema(
  {
    folder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Folder'
    },
    orderNumber: Number,
    timeStart: Date,
    timeEnd: Date,
    name: String,
    university,
    faculty,
    major,
    subject,
    classRoom,
    schedules: [schedule],
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

const EducationSection = mongoose.model('EducationSection', Schema);

const getAll = getAllCommon(EducationSection);
const getOne = getOneCommon(EducationSection);
const addOne = addOneCommon(EducationSection);
const editOne = editOneCommon(EducationSection);
const deleteOne = deleteOneCommon(EducationSection);
const deleteAll = deleteAllCommon(EducationSection);

export default EducationSection;
export { getAll, getOne, addOne, editOne, deleteOne, deleteAll };
