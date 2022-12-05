require('dotenv').config();
import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import cors from 'cors';
import routes from 'routes';
import path from 'path';
import updateIfCurrentPlugin from 'mongoose-update-if-current';
import mongooseHidden from 'mongoose-hidden';
import { createClient } from 'redis';

global.__basedir = path.join(__dirname, '../');
const { PORT, MONGODB_URL, MONGODB_URL2, REDIS_URL } = process.env;

const app = express();
app.use(helmet());
app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);
mongoose
  .connect(MONGODB_URL, {})
  .then(() => console.log(`MongoDB  🔗`))
  .catch((err) => console.log(err));

mongoose.plugin(updateIfCurrentPlugin);
mongoose.plugin(mongooseHidden);

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const redisClient = createClient({ url: REDIS_URL });

redisClient.on('connect', () => {
  console.log('Redis  🔗');
});

redisClient.on('error', (err) => {
  console.log(err);
});

redisClient.connect();

redisClient.set('connect', 'Mifzan', (err, reply) => {
  console.log(reply);
});

app.listen(PORT, () => {
  console.log(`👂  📢  ${PORT}`);
});
