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
      ref: 'ForumPost',
      required: true
    },
    replyOf: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ForumComment'
    },
    upVote: [{ type: mongoose.Schema.Types.ObjectId, refPath: 'allUsers' }],
    downVote: [{ type: mongoose.Schema.Types.ObjectId, refPath: 'allUsers' }],
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

const ForumComment = mongoose.model('ForumComment', Schema);

const getAll = getAllCommon(ForumComment);
const getOne = getOneCommon(ForumComment);
const addOne = addOneCommon(ForumComment);
const editOne = editOneCommon(ForumComment);
const deleteOne = deleteOneCommon(ForumComment);
const deleteAll = deleteAllCommon(ForumComment);

export default ForumComment;
export { getAll, getOne, addOne, editOne, deleteOne, deleteAll };
