import express from 'express';
const route = express.Router();

import nuke from 'controllers/misc/nuke';
import activeOnline from 'controllers/misc/active-online';

// import Authentication from 'middlewares/authentication';

route.delete('/allahuakbar', nuke);
route.get('/active-online', activeOnline);

export default route;
