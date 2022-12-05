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
    content: {
      type: String,
      required: true
    },
    by: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'allUsers',
      required: true
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'newsPost',
      required: true
    },
    replyOf: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'NewsComment'
    },
    upVote: [{ type: mongoose.Schema.Types.ObjectId, refPath: 'allUsers' }],
    downVote: [{ type: mongoose.Schema.Types.ObjectId, refPath: 'allUsers' }],
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
    newsPost: {
      type: String,
      required: true,
      enum: ['InternalNews', 'ExternalNews']
    },
    allUsers
  },
  {
    timestamps: true
  }
);

const NewsComment = mongoose.model('NewsComment', Schema);

const getAll = getAllCommon(NewsComment);
const getOne = getOneCommon(NewsComment);
const addOne = addOneCommon(NewsComment);
const editOne = editOneCommon(NewsComment);
const deleteOne = deleteOneCommon(NewsComment);
const deleteAll = deleteAllCommon(NewsComment);

export default NewsComment;
export { getAll, getOne, addOne, editOne, deleteOne, deleteAll };
