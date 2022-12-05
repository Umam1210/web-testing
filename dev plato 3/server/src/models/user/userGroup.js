import mongoose from 'mongoose';
import capitalizeName from 'helpers/capitalizeName';
import passwordHash from 'helpers/passwordHash';
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
    usersLinked: [
      {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'allUsers'
      }
    ],
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

const UserGroup = mongoose.model('UserGroup', Schema);

const getAll = getAllCommon(UserGroup);
const getOne = getOneCommon(UserGroup);
const addOne = addOneCommon(UserGroup);
const editOne = editOneCommon(UserGroup);
const deleteOne = deleteOneCommon(UserGroup);
const deleteAll = deleteAllCommon(UserGroup);

export default UserGroup;
export { getAll, getOne, addOne, editOne, deleteOne, deleteAll };
