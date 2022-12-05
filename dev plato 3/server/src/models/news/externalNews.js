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
      default: 'externalNews'
    },
    publisher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'NewsPublisher',
      required: true
    },
    originalUrl: {
      type: String,
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

const ExternalNews = mongoose.model('ExternalNews', Schema, 'newsposts');

const getAll = getAllCommon(ExternalNews);
const getOne = getOneCommon(ExternalNews);
const addOne = addOneCommon(ExternalNews);
const editOne = editOneCommon(ExternalNews);
const deleteOne = deleteOneCommon(ExternalNews);
const deleteAll = deleteAllCommon(ExternalNews);

export default ExternalNews;
export { getAll, getOne, addOne, editOne, deleteOne, deleteAll };
