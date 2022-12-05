import express from 'express';
const route = express.Router();

import { getAll, getOne, addOne, deleteOne, deleteAll, editOne } from 'models/market/item';

// import Authentication from 'middlewares/authentication';
import getAllMarket from 'controllers/market/getAll';
import getOneMarket from 'controllers/market/getOne';
import addOneMarket from 'controllers/market/addOne';
import editOneMarket from 'controllers/market/editOne';
import deleteOneMarket from 'controllers/market/deleteOne';

// route.get('/', getAll);
route.get('/', getAllMarket);
// route.get('/:id', getOne);
route.get('/:id', getOneMarket);
// route.post('/', addOne);
route.post('/', addOneMarket);
// route.post('/sign-in', signIn);
// route.patch('/:id', Authentication, editOne);
// route.delete('/:id', Authentication, deleteOne);
// route.patch('/:id', editOne);
route.patch('/:id', editOneMarket);
route.delete('/delete-all', deleteAll);
// route.delete('/:id', deleteOne);
route.delete('/:id', deleteOneMarket);
route.delete('/:id', deleteOneMarket);

export default route;
