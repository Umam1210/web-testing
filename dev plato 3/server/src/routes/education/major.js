import express from 'express';
const route = express.Router();

import { getAll, getOne, addOne, deleteOne, deleteAll, editOne } from 'models/education/major';
import createOne from 'controllers/education/major/createOne';

import Authentication from 'middlewares/authentication';

route.get('/', getAll);
route.get('/:id', getOne);
route.post('/', Authentication, createOne);
// route.post('/sign-in', signIn);
// route.patch('/:id', Authentication, editOne);
// route.delete('/:id', Authentication, deleteOne);
route.patch('/:id', editOne);
route.delete('/delete-all', deleteAll);
route.delete('/:id', deleteOne);

export default route;
