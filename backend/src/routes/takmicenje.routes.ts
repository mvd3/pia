import express from 'express';
import { TakmicenjeController } from '../controllers/takmicenje.controller';

const takmicenjeRouter = express.Router();

takmicenjeRouter.route('/dohvatiSportove').post((req, res)=>new TakmicenjeController().dohvatiSportove(req, res));
takmicenjeRouter.route('/dohvatiSportisteZemlje').post((req, res)=>new TakmicenjeController().dohvatiSportisteZemlje(req, res));
takmicenjeRouter.route('/dodajSportistuZaDisciplinu').post((req, res)=>new TakmicenjeController().dodajSportistuZaDisciplinu(req, res));
takmicenjeRouter.route('/dohvatiIdZemljePoKodu').post((req, res)=>new TakmicenjeController().dohvatiIdZemljePoKodu(req, res));
takmicenjeRouter.route('/dohvatiZemlje').post((req, res)=>new TakmicenjeController().dohvatiZemlje(req, res));
takmicenjeRouter.route('/tvoriTakmicenje').post((req, res)=>new TakmicenjeController().tvoriTakmicenje(req, res));
takmicenjeRouter.route('/dohvatiTakmicenjaUPripremi').post((req, res)=>new TakmicenjeController().dohvatiTakmicenjaUPripremi(req, res));
takmicenjeRouter.route('/dohvatiSport').post((req, res)=>new TakmicenjeController().dohvatiSport(req, res));
takmicenjeRouter.route('/dohvatiSportisteZaTakmicenje').post((req, res)=>new TakmicenjeController().dohvatiSportisteZaTakmicenje(req, res));
takmicenjeRouter.route('/dohvatiLokacijeZaSport').post((req, res)=>new TakmicenjeController().dohvatiLokacijeZaSport(req, res));
takmicenjeRouter.route('/proveriZauzece').post((req, res)=>new TakmicenjeController().proveriZauzece(req, res));
takmicenjeRouter.route('/dohvatiSlobodneDelegate').post((req, res)=>new TakmicenjeController().dohvatiSlobodneDelegate(req, res));
takmicenjeRouter.route('/organizujTakmicenje').post((req, res)=>new TakmicenjeController().organizujTakmicenje(req, res));
takmicenjeRouter.route('/dohvatiTakmicenjaZaDelegata').post((req, res)=>new TakmicenjeController().dohvatiTakmicenjaZaDelegata(req, res));
takmicenjeRouter.route('/dohvatiZauzecaZaTakmicenje').post((req, res)=>new TakmicenjeController().dohvatiZauzecaZaTakmicenje(req, res));
takmicenjeRouter.route('/dodajRundu').post((req, res)=>new TakmicenjeController().dodajRundu(req, res));
takmicenjeRouter.route('/dohvatiTakmicenjaSaRundama').post((req, res)=>new TakmicenjeController().dohvatiTakmicenjaSaRundama(req, res));
takmicenjeRouter.route('/dohvatiRundu').post((req, res)=>new TakmicenjeController().dohvatiRundu(req, res));
takmicenjeRouter.route('/dohvatiSportiste').post((req, res)=>new TakmicenjeController().dohvatiSportiste(req, res));
takmicenjeRouter.route('/zavrsiTakmicenje').post((req, res)=>new TakmicenjeController().zavrsiTakmicenje(req, res));
takmicenjeRouter.route('/zavrsiRundu').post((req, res)=>new TakmicenjeController().zavrsiRundu(req, res));
takmicenjeRouter.route('/dohvatiZavrsenaTakmicenja').post((req, res)=>new TakmicenjeController().dohvatiZavrsenaTakmicenja(req, res));
takmicenjeRouter.route('/traziSportiste').post((req, res)=>new TakmicenjeController().traziSportiste(req, res));

export default takmicenjeRouter;
