import mongoose from 'mongoose';
import {
  getAllCommon,
  getOneCommon,
  addOneCommon,
  editOneCommon,
  deleteOneCommon,
  deleteAllCommon
} from 'helpers/commonControllers';
import capitalizeName from 'helpers/capitalizeName';
import { educationLevels } from 'helpers/databaseTypes';
const { faculty } = educationLevels;

const Schema = new mongoose.Schema(
  {
    folder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Folder',
      required: true
    },
    name: {
      type: String,
      set: capitalizeName,
      required: true
    },
    businessType: {
      type: String,
      required: true,
      enum: [
        'university',
        'highSchool',
        'middleSchool',
        'elementarySchool',
        'nonFormal',
        'nonFormalTimeBased'
      ]
    },
    brand: {
      name: String,
      templateColor: String,
      color: String,
      rectLogo: String,
      squareLogo: String,
      favicon: String
    },
    faculties: [faculty],
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

const EducationUniversity = mongoose.model('EducationUniversity', Schema);

const getAll = getAllCommon(EducationUniversity);
const getOne = getOneCommon(EducationUniversity);
const addOne = addOneCommon(EducationUniversity);
const editOne = editOneCommon(EducationUniversity);
const deleteOne = deleteOneCommon(EducationUniversity);
const deleteAll = deleteAllCommon(EducationUniversity);

export default EducationUniversity;
export { getAll, getOne, addOne, editOne, deleteOne, deleteAll };
