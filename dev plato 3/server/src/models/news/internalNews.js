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

// API from:
// https://newsapi.org/docs/
// https://mediastack.com/documentation

const Schema = new mongoose.Schema(
  {
    contentType: {
      type: String,
      default: 'internalNews'
    },
    publisher: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'allUsers',
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: String,
    fullContent: {
      type: String,
      required: true
    },
    date: Date,
    tags: [{ type: String }],
    category: String,
    thumbnail: String,
    upVote: [{ type: mongoose.Schema.Types.ObjectId, refPath: 'allUsers' }],
    downVote: [{ type: mongoose.Schema.Types.ObjectId, refPath: 'allUsers' }],
    flags: {
      isDeleted: {
        type: Boolean,
        default: false
      }
    },
    allUsers
  },
  {
    timestamps: true
  }
);

const InternalNews = mongoose.model('InternalNews', Schema, 'newsposts');

const getAll = getAllCommon(InternalNews);
const getOne = getOneCommon(InternalNews);
const addOne = addOneCommon(InternalNews);
const editOne = editOneCommon(InternalNews);
const deleteOne = deleteOneCommon(InternalNews);
const deleteAll = deleteAllCommon(InternalNews);

export default InternalNews;
export { getAll, getOne, addOne, editOne, deleteOne, deleteAll };
