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
        item: {},
        addedOn: {
          type: Date,
          required: true
        },
        subTotal: {
          type: Number,
          required: true
        }
      }
    ],
    total: {
      type: Number,
      required: true
    },
    paymentStatus: {
      type: String,
      required: true,
      enum: ['pending', 'paid', 'failed']
    },
    // TODO: Add a reference to payment details
    paymentDetails: [{}],
    orderType: {
      type: String,
      required: true,
      enum: ['studyCard', 'market']
    },
    expiredBy: {
      type: Date,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'allUsers',
      required: true
    },
    userCreator: {
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

const FinanceOrder = mongoose.model('FinanceOrder', Schema);

const getAll = getAllCommon(FinanceOrder);
const getOne = getOneCommon(FinanceOrder);
const addOne = addOneCommon(FinanceOrder);
const editOne = editOneCommon(FinanceOrder);
const deleteOne = deleteOneCommon(FinanceOrder);
const deleteAll = deleteAllCommon(FinanceOrder);

export default FinanceOrder;
export { getAll, getOne, addOne, editOne, deleteOne, deleteAll };
