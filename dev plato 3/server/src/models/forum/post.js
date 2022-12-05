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
    postType: {
      type: String,
      default: 'text',
      enum: ['text', 'image', 'url', 'poll']
    },
    content: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    by: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'allUsers'
    },
    community: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ForumCommunity'
    },
    views: {
      type: Number,
      default: 0
    },
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

const ForumPost = mongoose.model('ForumPost', Schema);

const getAll = getAllCommon(ForumPost);
const getOne = getOneCommon(ForumPost);
const addOne = addOneCommon(ForumPost);
const editOne = editOneCommon(ForumPost);
const deleteOne = deleteOneCommon(ForumPost);
const deleteAll = deleteAllCommon(ForumPost);

export default ForumPost;
export { getAll, getOne, addOne, editOne, deleteOne, deleteAll };
