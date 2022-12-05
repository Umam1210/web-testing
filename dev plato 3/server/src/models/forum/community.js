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
    moderators: [{ type: mongoose.Schema.Types.ObjectId, refPath: 'allUsers' }],
    members: [{ type: mongoose.Schema.Types.ObjectId, refPath: 'allUsers' }],
    allUsers,
    name: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      required: true
    },
    identity: {
      color: String,
      logo: String,
      banner: String,
      icon: String,
      background: String
    },
    rules: [
      {
        title: String,
        description: String
      }
    ],
    views: {
      type: Number,
      default: 0
    },
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

const ForumCommunity = mongoose.model('ForumCommunity', Schema);

const getAll = getAllCommon(ForumCommunity);
const getOne = getOneCommon(ForumCommunity);
const addOne = addOneCommon(ForumCommunity);
const editOne = editOneCommon(ForumCommunity);
const deleteOne = deleteOneCommon(ForumCommunity);
const deleteAll = deleteAllCommon(ForumCommunity);

export default ForumCommunity;
export { getAll, getOne, addOne, editOne, deleteOne, deleteAll };
