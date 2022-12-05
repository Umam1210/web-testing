import mongoose from 'mongoose';
import {
  getAllCommon,
  getOneCommon,
  addOneCommon,
  editOneCommon,
  deleteOneCommon,
  deleteAllCommon
} from 'helpers/commonControllers';
import { allUsers } from 'helpers/databaseTypes';

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      enum: ['image', 'video', 'audio', 'file']
    },
    url: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String
    },
    uploader: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'allUsers',
      required: true
    },
    allUsers,
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

const FileFile = mongoose.model('FileFile', Schema);

const getAll = getAllCommon(FileFile);
const getOne = getOneCommon(FileFile);
const addOne = addOneCommon(FileFile);
const editOne = editOneCommon(FileFile);
const deleteOne = deleteOneCommon(FileFile);
const deleteAll = deleteAllCommon(FileFile);

export default FileFile;
export { getAll, getOne, addOne, editOne, deleteOne, deleteAll };
