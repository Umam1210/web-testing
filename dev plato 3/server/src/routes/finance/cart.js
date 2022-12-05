import express from 'express';
const route = express.Router();

import { getAll, getOne, addOne, deleteOne, deleteAll, editOne } from 'models/finance/cart';

// import Authentication from 'middlewares/authentication';
import getAllCart from 'controllers/cart/getAll';
import getOneCart from 'controllers/cart/getOne';
import editOneCart from 'controllers/cart/editOne';
import deleteOneCart from 'controllers/cart/deleteOne';
import addOneCart from 'controllers/cart/addOne';

// route.get('/', getAll);
route.get('/', getAllCart);
// route.get('/:id', getOne);
route.get('/:id', getOneCart);
// route.post('/', addOne);
route.post('/', addOneCart);
// route.post('/sign-in', signIn);
// route.patch('/:id', Authentication, editOne);
// route.delete('/:id', Authentication, deleteOne);
// route.patch('/:id', editOne);
route.patch('/:id', editOneCart);
route.delete('/delete-all', deleteAll);
// route.delete('/:id', deleteOne);
route.delete('/:id', deleteOneCart);

export default route;
