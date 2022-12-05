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
    isGroupChat: {
      type: Boolean,
      default: false
    },
    members: [{ type: mongoose.Schema.Types.ObjectId, refPath: 'allUsers' }],
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

const ChatSession = mongoose.model('ChatSession', Schema);

const getAll = getAllCommon(ChatSession);
const getOne = getOneCommon(ChatSession);
const addOne = addOneCommon(ChatSession);
const editOne = editOneCommon(ChatSession);
const deleteOne = deleteOneCommon(ChatSession);
const deleteAll = deleteAllCommon(ChatSession);

export default ChatSession;
export { getAll, getOne, addOne, editOne, deleteOne, deleteAll };
