import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import korisnikRouter from './routes/korisnik.routes';
import takmicenjeRouter from './routes/takmicenje.routes';

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/olimpijada');
const connection = mongoose.connection;
connection.once('open', ()=>{
  console.log('Veza za bazom podataka uspostavljena.');
});

const router = express.Router();
router.use('/korisnici', korisnikRouter);
router.use('/takmicenje', takmicenjeRouter);

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
