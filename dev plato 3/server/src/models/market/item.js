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
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'allUsers'
    },
    name: {
      type: String,
      required: true
    },
    itemType: {
      type: String,
      required: true,
      enum: ['EducationSubject', 'service']
    },
    item: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'itemType'
    },
    price: {
      itemPrice: {
        type: Number,
        required: true
      },
      discountedPrice: Number
    },
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

const MarketItem = mongoose.model('MarketItem', Schema);

const getAll = getAllCommon(MarketItem);
const getOne = getOneCommon(MarketItem);
const addOne = addOneCommon(MarketItem);
const editOne = editOneCommon(MarketItem);
const deleteOne = deleteOneCommon(MarketItem);
const deleteAll = deleteAllCommon(MarketItem);

export default MarketItem;
export { getAll, getOne, addOne, editOne, deleteOne, deleteAll };
