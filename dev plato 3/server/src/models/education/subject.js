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
const { faculty, major, classRoom, university } = educationLevels;

const Schema = new mongoose.Schema(
  {
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
    teachers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' }],
    folder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Folder'
    },
    name: String,
    description: String,
    introduction: String,
    timeStart: Date,
    timeEnd: Date,
    university,
    faculty,
    major,
    classRooms: [classRoom],
    price: {
      basePrice: Number,
      discountPrice: Number
    },
    // Prerequisite: past subjects.
    // Future rulesets: time spent in campus, major-only, faculty-only, university-only
    prerequisites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EducationSubject'
      }
    ],
    identity: {},
    flags: {
      isDeleted: {
        type: Boolean,
        default: false
      },
      isDraft: {
        type: Boolean,
        default: false
      }
    }
  },
  {
    timestamps: true
  }
);

const EducationSubject = mongoose.model('EducationSubject', Schema);

const getAll = getAllCommon(EducationSubject);
const getOne = getOneCommon(EducationSubject);
const addOne = addOneCommon(EducationSubject);
const editOne = editOneCommon(EducationSubject);
const deleteOne = deleteOneCommon(EducationSubject);
const deleteAll = deleteAllCommon(EducationSubject);

export default EducationSubject;
export { getAll, getOne, addOne, editOne, deleteOne, deleteAll };
