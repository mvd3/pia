import express from 'express';
import { KorisnikController } from '../controllers/korisnik.controller';

const korisnikRouter = express.Router();

korisnikRouter.route('/prijava').post((req, res)=>new KorisnikController().prijava(req, res));
korisnikRouter.route('/registracija').post((req, res)=>new KorisnikController().registracija(req, res));
korisnikRouter.route('/promena-lozinke').post((req, res)=>new KorisnikController().promenaLozinke(req, res));

export default korisnikRouter;
