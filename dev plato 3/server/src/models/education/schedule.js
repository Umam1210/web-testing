import mongoose from 'mongoose';
import {
  getAllCommon,
  getOneCommon,
  addOneCommon,
  editOneCommon,
  deleteOneCommon,
  deleteAllCommon
} from 'helpers/commonControllers';
import { educationLevels, question } from 'helpers/databaseTypes';
const { faculty, major, subject, classRoom, university, section } = educationLevels;

/*
  - Conference is by model ID
  - Material is by materialFiles
  - Question (quiz, test, and assignment) is by question component imported above
*/

const Schema = new mongoose.Schema(
  {
    scheduleType: {
      type: String,
      enum: ['conference', 'material', 'quiz', 'assignment', 'exam']
    },
    materialFiles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }],
    questions: [question],
    name: String,
    // either with a schedule number (for ordering) or a date (for conference)
    scheduleNumber: Number,
    timeStart: Date,
    timeEnd: Date,
    attendance: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
    university,
    faculty,
    major,
    subject,
    classRoom,
    section,
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

const EducationSchedule = mongoose.model('EducationSchedule', Schema);

const getAll = getAllCommon(EducationSchedule);
const getOne = getOneCommon(EducationSchedule);
const addOne = addOneCommon(EducationSchedule);
const editOne = editOneCommon(EducationSchedule);
const deleteOne = deleteOneCommon(EducationSchedule);
const deleteAll = deleteAllCommon(EducationSchedule);

export default EducationSchedule;
export { getAll, getOne, addOne, editOne, deleteOne, deleteAll };
