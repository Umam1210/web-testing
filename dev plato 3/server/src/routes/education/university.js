import express from 'express';
const route = express.Router();

import { getAll, getOne, deleteOne, deleteAll, editOne } from 'models/education/university';
import createOne from 'controllers/education/university/createOne';
import createOneNonFormal from 'controllers/education/university/createOneNonFormal';

import Authentication from 'middlewares/authentication';

route.get('/', getAll);
route.get('/:id', getOne);
route.post('/', Authentication, createOne);
route.post('/non-formal', Authentication, createOneNonFormal);
// route.post('/sign-in', signIn);
// route.patch('/:id', Authentication, editOne);
// route.delete('/:id', Authentication, deleteOne);
route.patch('/:id', editOne);
route.delete('/delete-all', deleteAll);
route.delete('/:id', deleteOne);

export default route;
