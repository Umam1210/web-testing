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
    session: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ChatSession',
      required: true
    },
    by: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'allUsers',
      required: true
    },
    allUsers,
    contentType: {
      type: String,
      required: true,
      enum: ['text', 'image', 'video', 'audio', 'file', 'sticker']
    },
    content: {
      type: String,
      required: true
    },
    flags: {
      isDeleted: {
        type: Boolean,
        default: false
      },
      isReply: {
        type: Boolean,
        default: false
      },
      replyOf: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat'
      }
    }
  },
  {
    timestamps: true
  }
);

const ChatChat = mongoose.model('ChatChat', Schema);

const getAll = getAllCommon(ChatChat);
const getOne = getOneCommon(ChatChat);
const addOne = addOneCommon(ChatChat);
const editOne = editOneCommon(ChatChat);
const deleteOne = deleteOneCommon(ChatChat);
const deleteAll = deleteAllCommon(ChatChat);

export default ChatChat;
export { getAll, getOne, addOne, editOne, deleteOne, deleteAll };
