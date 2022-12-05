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
const { faculty, major, subject, classRoom, university, section, schedule } = educationLevels;

const Schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student'
    },
    answers: [
      {
        questionNumber: {
          type: Number,
          required: true
        },
        answer: {
          type: String,
          required: true
        },
        isCorrectAnswer: Boolean
      }
    ],
    totalScore: Number,
    scoredBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher'
      }
    ],
    university,
    faculty,
    major,
    subject,
    classRoom,
    section,
    schedule,
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

const ScheduleAnswer = mongoose.model('ScheduleAnswer', Schema);

const getAll = getAllCommon(ScheduleAnswer);
const getOne = getOneCommon(ScheduleAnswer);
const addOne = addOneCommon(ScheduleAnswer);
const editOne = editOneCommon(ScheduleAnswer);
const deleteOne = deleteOneCommon(ScheduleAnswer);
const deleteAll = deleteAllCommon(ScheduleAnswer);

export default ScheduleAnswer;
export { getAll, getOne, addOne, editOne, deleteOne, deleteAll };
