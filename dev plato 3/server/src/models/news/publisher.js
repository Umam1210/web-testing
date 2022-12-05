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
    logo: {
      type: String,
      required: true
    },
    website: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
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

const NewsPublisher = mongoose.model('NewsPublisher', Schema);

const getAll = getAllCommon(NewsPublisher);
const getOne = getOneCommon(NewsPublisher);
const addOne = addOneCommon(NewsPublisher);
const editOne = editOneCommon(NewsPublisher);
const deleteOne = deleteOneCommon(NewsPublisher);
const deleteAll = deleteAllCommon(NewsPublisher);

export default NewsPublisher;
export { getAll, getOne, addOne, editOne, deleteOne, deleteAll };
