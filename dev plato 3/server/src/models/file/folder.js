import mongoose from 'mongoose';
import {
  getAllCommon,
  getOneCommon,
  addOneCommon,
  editOneCommon,
  deleteOneCommon,
  deleteAllCommon
} from 'helpers/commonControllers';

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    contents: [
      {
        file: {
          type: mongoose.Schema.Types.ObjectId,
          refPath: 'contents.fileType'
        },
        fileType: {
          type: String,
          required: true,
          enum: ['FileFile', 'FileFolder']
        }
      }
    ],
    tagOwner: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'tagDepth'
    },
    views: {
      type: Number,
      default: 0
    },
    flags: {
      isDeleted: {
        type: Boolean,
        default: false
      }
    },
    tagDepth: {
      type: String,
      required: true,
      enum: [
        // Institution levels
        'University',
        'Faculty',
        'Major',
        'Subject',
        'ClassRoom',
        'Section',
        'Schedule',
        // User levels
        'Parent',
        'Student',
        'Management',
        'Admin',
        'Teacher',
        'SuperAdmin'
      ]
    }
  },
  {
    timestamps: true
  }
);

const FileFolder = mongoose.model('FileFolder', Schema);

const getAll = getAllCommon(FileFolder);
const getOne = getOneCommon(FileFolder);
const addOne = addOneCommon(FileFolder);
const editOne = editOneCommon(FileFolder);
const deleteOne = deleteOneCommon(FileFolder);
const deleteAll = deleteAllCommon(FileFolder);

export default FileFolder;
export { getAll, getOne, addOne, editOne, deleteOne, deleteAll };
