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
    items: [
      {
        // TODO: Add a reference to the item
        item: {
          type: mongoose.Schema.Types.ObjectId,
          path: 'MarketItem'
        },
        addedOn: {
          type: Date,
          default: Date.now(),
          // required: true
          required: false
        }
      }
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'allUsers',
      required: true
    },
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

const FinanceCart = mongoose.model('FinanceCart', Schema);

const getAll = getAllCommon(FinanceCart);
const getOne = getOneCommon(FinanceCart);
const addOne = addOneCommon(FinanceCart);
const editOne = editOneCommon(FinanceCart);
const deleteOne = deleteOneCommon(FinanceCart);
const deleteAll = deleteAllCommon(FinanceCart);

export default FinanceCart;
export { getAll, getOne, addOne, editOne, deleteOne, deleteAll };
