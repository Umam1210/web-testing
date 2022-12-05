// for study card (KRS).

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

const FinanceStudyCard = mongoose.model('FinanceStudyCard', Schema);

const getAll = getAllCommon(FinanceStudyCard);
const getOne = getOneCommon(FinanceStudyCard);
const addOne = addOneCommon(FinanceStudyCard);
const editOne = editOneCommon(FinanceStudyCard);
const deleteOne = deleteOneCommon(FinanceStudyCard);
const deleteAll = deleteAllCommon(FinanceStudyCard);

export default FinanceStudyCard;
export { getAll, getOne, addOne, editOne, deleteOne, deleteAll };
