import express from 'express';
const route = express.Router();

import { getAll, getOne, addOne, deleteOne, deleteAll, editOne } from 'models/education/subject';
import createOne from 'controllers/education/subject/createOne';

import Authentication from 'middlewares/authentication';

import getAllSubject from 'controllers/education/subject/getAll';
import getOneSubject from 'controllers/education/subject/getOne';
import addOneSubject from 'controllers/education/subject/addOne';
import deleteOneSubject from 'controllers/education/subject/deleteOne';
import updateOneSubject from 'controllers/education/subject/updateOne';

route.get('/', getAllSubject);
route.get('/:id', getOneSubject);
route.post('/', addOneSubject);
route.delete('/:id', deleteOneSubject);
route.patch('/:id', updateOneSubject);

// route.get('/', getAll);
// route.get('/:id', getOne);
// route.post('/', Authentication, createOne);
// // route.post('/sign-in', signIn);
// // route.patch('/:id', Authentication, editOne);
// // route.delete('/:id', Authentication, deleteOne);
// route.patch('/:id', editOne);
// route.delete('/delete-all', deleteAll);
// route.delete('/:id', deleteOne);

export default route;
