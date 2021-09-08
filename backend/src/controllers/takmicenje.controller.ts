import express from 'express';

import Sport from '../models/sport';
import Sportista from '../models/sportista';
import Zemlja from '../models/zemlja';
import Takmicenje from '../models/takmicenje';
import Lokacija from '../models/lokacija';
import Zauzece from '../models/zauzece';
import Korisnik from '../models/korisnik';
import Runda from '../models/runda';

var ObjectId = require('mongoose').Types.ObjectId;

export class TakmicenjeController {

  dohvatiSportove = (req: express.Request, res: express.Response)=>{

    Sport.find({}, (err, sportovi)=>{
      if (err) console.log(err);
      else if (sportovi) res.json(sportovi);
      else console.log('Ne mogu se dohvatiti sportovi!');
    });

  };

  dohvatiSportisteZemlje = (req: express.Request, res: express.Response)=>{

    let zemlja = req.body.zemlja;

    Sportista.find({'zemlja': zemlja}, (err, sportisti)=>{
      if (err) console.log(err);
      else if (sportisti) res.json(sportisti);
      else console.log('Ne mogu se dohvatiti sportisti!');
    });

  }

  dodajSportistuZaDisciplinu = (req: express.Request, res: express.Response)=>{

    let sport = req.body.sport;
    let pol = req.body.pol;
    let disciplina = req.body.disciplina;
    let sportista = req.body.sportista;

    let uspesno = false;
    let poruka = 'Дошло је до грешке у систему!';

    //{$and: [{'_id': new ObjectId(sport)}, {'discipline.sifra': disciplina}]}
    //ObjectId(`${sportista}`)


    if (pol==0) { //Musko

      Sport.findOneAndUpdate({'_id': new ObjectId(sport), 'discipline.sifra': disciplina},
      {$addToSet: {'discipline.$.prijavljeniM' : {'_id': new ObjectId(sportista)} }},
      {new: true},
      (err, sp)=>{

        if (err) console.log(err);
        else if (sp) {
          uspesno = true;
          poruka = 'Успешно извршена операција.';
        }

        const odgovor = {
          uspesno: uspesno,
          poruka: poruka
        }

        res.json(odgovor);

      });

    } else if (pol==1) { //Zensko

      Sport.findOneAndUpdate({'_id': new ObjectId(sport), 'discipline.sifra': disciplina},
      {$addToSet: {'discipline.$.prijavljeniZ' : {'_id': new ObjectId(sportista)} }},
      {new: true},
      (err, sp)=>{

        if (err) console.log(err);
        else if (sp) {
          uspesno = true;
          poruka = 'Успешно извршена операција.';
        }

        const odgovor = {
          uspesno: uspesno,
          poruka: poruka
        }

        res.json(odgovor);

      });

    } else { //greska

      const odgovor = {
        uspesno: uspesno,
        poruka: poruka
      }

      res.json(odgovor);

    }



  }

  dohvatiIdZemljePoKodu = (req: express.Request, res: express.Response)=>{

    let kod = req.body.kod;

    Zemlja.findOne({'kod': kod}, (err, zemlja)=>{
      if (err) console.log(err);
      else res.json(zemlja.get('_id'));
    });

  }

  dohvatiZemlje = (req: express.Request, res: express.Response)=>{

    Zemlja.find({}, (err, zemlje)=>{
      if (err) console.log(err);
      else res.json(zemlje);
    })

  }

  tvoriTakmicenje = (req: express.Request, res: express.Response)=>{

    let sport = req.body.sport;
    let disciplina = req.body.disciplina;
    let kategorija = req.body.kategorija;
    let naziv = req.body.naziv;

    let dummyId = new ObjectId();

    let uspesno = false;
    let poruka = 'Дошло је до грешке приликом креирања такмичења!';

    let takmicenje = new Takmicenje({'_id': new ObjectId(),
      'naziv': naziv,
      'sport': new ObjectId(sport),
      'disciplina': disciplina,
      'kategorija': kategorija,
      'delegat': dummyId,
      'status': 0,
      'medalje': {
        'zlato': dummyId,
        'srebro': dummyId,
        'bronza': dummyId
      }});

    takmicenje.save((err, takm)=>{
      if (err) console.log(err);
      else if (takm) {

        if (kategorija==0) {

          Sport.findOneAndUpdate({$and: [{'_id': new ObjectId(sport)}, {'discipline.sifra': disciplina}]},
            {'discipline.$.raspolozivM': false},
            {new: true},
            (err, sp)=>{
              if (err) console.log(err)
              else if (sp) {

                uspesno = true;
                poruka = 'Успешно креирано такмичење!';

              }

              const odgovor = {
                uspesno: uspesno,
                poruka: poruka
              }

              res.json(odgovor);

            });

        } else {

          Sport.findOneAndUpdate({$and: [{'_id': new ObjectId(sport)}, {'discipline.sifra': disciplina}]},
            {'discipline.$.raspolozivZ': false},
            {new: true},
            (err, sp)=>{
              if (err) console.log(err)
              else if (sp) {

                uspesno = true;
                poruka = 'Успешно креирано такмичење!';

              }

              const odgovor = {
                uspesno: uspesno,
                poruka: poruka
              }

              res.json(odgovor);

            });

        }

      }

    });

  }

  dohvatiTakmicenjaUPripremi = (req: express.Request, res: express.Response)=>{

    Takmicenje.find({'status': 0}, (err, takm)=>{
      if (err) console.log(err);
      else res.json(takm);
    });

  }

  dohvatiSport = (req: express.Request, res: express.Response)=>{

    let sport = req.body.sport;

    Sport.findOne({'_id': new ObjectId(sport)},
      (err, sport)=>{
        if (err) console.log(err);
        else res.json(sport);
    });

  }

  dohvatiSportisteZaTakmicenje = (req: express.Request, res: express.Response)=>{

    let sport = req.body.sport;
    let disciplina = req.body.disciplina;
    let kategorija = req.body.kategorija;

    let sportistiId: (typeof ObjectId)[] = [];

    Sport.findOne({'_id': new ObjectId(sport)},
      (err, sport)=>{

        if (err) console.log(err);
        else if (sport) { //Nadjen sport

          for (let i=0;i<sport.get('discipline').length;i++) { //Pretrazi discipline

            if (sport.get('discipline')[i].sifra==disciplina) { //Nadjena disciplina

              if (kategorija==0) { //Muska kategorija

                for (let j=0;j<sport.get('discipline')[i].prijavljeniM.length;j++) {

                  sportistiId.push(sport.get('discipline')[i].prijavljeniM[j]);

                }


              } else { //Zenska kategorija

                for (let j=0;j<sport.get('discipline')[i].prijavljeniZ.length;j++) {

                  sportistiId.push(sport.get('discipline')[i].prijavljeniZ[j]);

                }

              }

              Sportista.find({'_id': {$in: sportistiId}},
              (err, sp)=>{
                if (err) console.log(err)
                else res.json(sp);
              });

              break; //Izlaz iz petlje

            }

          }

        }

      });

  }

  dohvatiLokacijeZaSport = (req: express.Request, res: express.Response)=>{

    let sport = req.body.sport;

    Lokacija.find({'sport': new ObjectId(sport)},
      (err, lokacije)=>{
        if (err) console.log(err);
        else res.json(lokacije);
      });

  }

  proveriZauzece = (req: express.Request, res: express.Response)=>{

    let takmicenje = req.body.takmicenje;
    let lokacija = req.body.lokacijaOdrzavanja;
    let terminOd = new Date(req.body.od);
    let terminDo = new Date(req.body.do);

    let zauzeceId: (typeof ObjectId)[] = [];

    let satOd: string;
    let satDo: string;

    let uspesno = false;
    let poruka = 'Дошло је до грешке!';

    Lokacija.findOne({'_id': new ObjectId(lokacija)}, (err, lok)=>{ //Lokacija
      if (err) console.log(err);
      else if (lok) {

        for (let i=0;i<lok.get('zauzece').length;i++) { //Pogledaj zauzeca
          zauzeceId.push(lok.get('zauzece')[i]);
        }

        Zauzece.find({'_id': { $in: zauzeceId}},
          (err, zauzeca)=>{ //Vidi da li ih ima

            if (err) console.log(err);
            else if (zauzeca) {

              uspesno = true;

              for (let i=0;i<zauzeca.length;i++) { //Prodji kroz rezevacije

                if(terminOd.getDate()==zauzeca[i].get('od').getDate()
                  && terminOd.getMonth()==zauzeca[i].get('od').getMonth()
                  && ((terminOd.getHours()<zauzeca[i].get('do').getHours()
                    && terminOd.getHours()>zauzeca[i].get('od').getHours())
                  || (terminOd.getHours()<zauzeca[i].get('od').getHours()
                    && terminDo.getHours()>zauzeca[i].get('do').getHours())
                  || (terminDo.getHours()>zauzeca[i].get('od').getHours()
                    && terminDo.getHours()<zauzeca[i].get('do').getHours())
                  || (terminOd.getHours()==zauzeca[i].get('od').getHours())
                  || (terminDo.getHours()==zauzeca[i].get('do').getHours()))) { //Zauzet termin

                    uspesno = false;
                    satOd = zauzeca[i].get('od').getHours();
                    satDo = zauzeca[i].get('do').getHours();
                    break;

                  }

              }

            } else uspesno = true;

            if (uspesno) poruka='Термин је слободан.';
            else poruka = `Термин се поклапа са термином ${satOd}-${satDo}.`;

            const odg = {
              uspesno: uspesno,
              poruka: poruka
            }

            res.json(odg);

        });

      } else { //Greska

        const odg = {
          uspesno: uspesno,
          poruka: poruka
        }

        res.json(odg);

      }
    });

  }

  dohvatiSlobodneDelegate = (req: express.Request, res: express.Response)=>{

    Korisnik.find({'uloga': 2}, (err, delegati)=>{

      if (err) console.log(err);
      else res.json(delegati);

    });

  }

  organizujTakmicenje = (req: express.Request, res: express.Response)=>{

    let takmicenje = JSON.parse(req.body.takmicenje);
    let delegat = req.body.delegat;
    let sportisti = req.body.sportisti;
    let rezervacije = JSON.parse(req.body.rezervacije);

    let uspesno = false;
    let poruka = 'Дошло је до грешке у систему!';

    let sportistiId: (typeof ObjectId)[] = [];

    sportisti.forEach((s: string)=>{
      sportistiId.push(new ObjectId(s));
    });

    Takmicenje.findOneAndUpdate({'_id': new ObjectId(takmicenje['_id'])},
      {'delegat': delegat, 'status': 1},
      { new: true },
      (err, takm)=>{

        if (err) console.log(err);
        else if (takm) { //Uspesno

          if (takmicenje['kategorija']==0) { //Muska kategorija

            Sport.findOneAndUpdate({$and: [{'_id': new ObjectId(takmicenje['sport'])}, {'discipline.sifra': takmicenje['disciplina']}]},
            {$pull: {'discipline.$.prijavljeniM': {'_id': {$nin: sportistiId}}}},
            {new: true},
            (err, sport)=>{

              if (err) console.log(err);
              else if (sport) {
                uspesno = true;
                poruka = 'Успешно обављена операција. Такмичење је организовано.';

                const odg = {
                  uspesno: uspesno,
                  poruka: poruka
                }

                res.json(odg);
              }

            });

          } else { //Zenska kategorija

            Sport.findOneAndUpdate({$and: [{'_id': new ObjectId(takmicenje['sport'])}, {'discipline.sifra': takmicenje['disciplina']}]},
            {$pull: {'discipline.$.prijavljeniZ': {'_id': {$nin: sportistiId}}}},
            {new: true},
            (err, sport)=>{

              if (err) console.log(err);
              else if (sport) {
                uspesno = true;
                poruka = 'Успешно обављена операција. Такмичење је организовано.';

                const odg = {
                  uspesno: uspesno,
                  poruka: poruka
                }

                res.json(odg);
              }

            });

          }

          for (let indeks in rezervacije) { //Prodji kroz sve rezervacije

            for (let i=0;i<rezervacije[indeks].length;i++) { //Prodji kroz sva zauzeca

              let novoZauzece = new Zauzece({'_id': new ObjectId(),
                'takmicenje': takmicenje['_id'],
                'od': new Date(rezervacije[indeks][i]['od']),
                'do': new Date(rezervacije[indeks][i]['do']),
                'slobodno': true});

              novoZauzece.save((err, zauz)=>{
                if (err) console.log(err);
                else if (zauz) {

                  Lokacija.findOneAndUpdate({'_id': new ObjectId(indeks)},
                    {$addToSet: {'zauzece': {'_id': new ObjectId(novoZauzece.get('_id'))}}},
                    {new: true},
                    (err, lok)=>{

                    });

                }
              });

            }

          }


        } else { //Greska

          const odg = {
            uspesno: uspesno,
            poruka: poruka
          }

          res.json(odg);

        }

      });

  }

  dohvatiTakmicenjaZaDelegata = (req: express.Request, res: express.Response)=>{

    let delegat = req.body.delegat;

    Takmicenje.find({$and: [{'delegat': delegat}, {'status': 1}]},
      (err, takm)=>{
        if (err) console.log(err);
        else res.json(takm);
    });

  }

  dohvatiZauzecaZaTakmicenje = (req: express.Request, res: express.Response)=>{

    let takmicenje = req.body.takmicenje;

    Zauzece.find({$and: [{'takmicenje': new ObjectId(takmicenje)}, {'slobodno': true}]},
      (err, zauzeca)=>{

        if (err) console.log(err);
        else res.json(zauzeca);

      });

  }

  dodajRundu = (req: express.Request, res: express.Response)=>{

    let takmicenje = req.body.takmicenje;
    let naziv = req.body.naziv;
    let finalna = req.body.finalna;
    let termin = req.body.termin;
    let takmicari = req.body.takmicari;
    let rezultati = req.body.rezultati;

    let takmicariId: (typeof ObjectId)[] = [];
    let rezultatiZaUnos: string[] = [];

    for (let i=0;i<takmicari.length;i++) {
      takmicariId.push(new ObjectId(takmicari[i]));
      rezultatiZaUnos.push(rezultati[i]);
    }

    let novaRunda = new Runda({'_id': new ObjectId(),
      'takmicenje': new ObjectId(takmicenje),
      'naziv': naziv,
      'finalna': finalna,
      'odigrana': false,
      'rezultati': {
        'takmicari': takmicariId,
        'rezultati': rezultatiZaUnos
      }});

      novaRunda.save((err, rnd)=>{ //Dodaj novu rundu
        if (err) console.log(err);
        else if (rnd) {

          Takmicenje.update( //Azuriraj takmicenje
            {'_id': new ObjectId(takmicenje)},
            {'status': 2},
            {new: true},
            (err, takm)=>{
              if (err) console.log(err);
              else if (takm) {

                Zauzece.update(
                  {'_id': new ObjectId(termin)},
                  {'slobodno': false},
                  {new: true},
                  (err, zauzece)=>{
                    if (err) console.log(err);
                    else if (zauzece) {

                      const odgovor = {
                        uspesno: true,
                        poruka: 'Успешно додата рунда.'
                      }

                      res.json(odgovor);

                    } else {

                      const odgovor = {
                        uspesno: false,
                        poruka: 'Грешка приликом додавања рунде.'
                      }

                      res.json(odgovor);

                    }
                  }
                );

                if (finalna) { //Zakljucaj neiskoriscene termine

                  Zauzece.updateMany(
                    {'takmicenje': new ObjectId(takmicenje)},
                    {'slobodno': false},
                    {'new': true},
                    (err, zauzece)=>{}
                  );

                }


              } else {

                const odgovor = {
                  uspesno: false,
                  poruka: 'Грешка приликом додавања рунде.'
                }

                res.json(odgovor);

              }
            }
          );

        } else {

          const odgovor = {
            uspesno: false,
            poruka: 'Грешка приликом додавања рунде.'
          }

          res.json(odgovor);

        }

      });

  }

  dohvatiTakmicenjaSaRundama = (req: express.Request, res: express.Response)=>{

    let delegat = req.body.delegat;

    Takmicenje.find(
      {$and: [{'delegat': delegat}, {'status': 2}]},
      (err, takm)=>{

        if (err) console.log(err);
        else res.json(takm);

      }
    );

  }

  dohvatiRundu = (req: express.Request, res: express.Response)=>{

    let takmicenje = req.body.takmicenje;

    Runda.findOne(
      {$and:[{'takmicenje': takmicenje}, {'odigrana': false}]},
      (err, runda)=>{
        if (err) console.log(err);
        else res.json(runda);
      }
    );

  }

  dohvatiSportiste = (req: express.Request, res: express.Response)=>{

    let sportisti = req.body.sportisti;

    let sportistiId: (typeof ObjectId)[] = [];

    for (let i=0;i<sportisti.length;i++) {
      sportistiId.push(new ObjectId(sportisti[i]));
    }

    Sportista.find(
      {'_id': {$in: sportistiId}},
      (err, spt)=>{

        if (err) console.log(err);
        else res.json(spt);

      }
    );

  }

  zavrsiTakmicenje = (req: express.Request, res: express.Response)=>{

    let takmicenje = req.body.takmicenje;
    let runda = req.body.runda;
    let medalje = req.body.medalje;
    let rezultati = req.body.rezultati;

    Runda.update(
      {'_id': new ObjectId(runda)},
      {'odigrana': true, 'rezultati.rezultati': rezultati},
      {new: true},
      (err, runda)=>{
        if (err) console.log(err);
        else if (runda) {

          Takmicenje.update(
            {'_id': new ObjectId(takmicenje)},
            {'status': 3, 'medalje.zlato': new ObjectId(medalje[0]), 'medalje.srebro': new ObjectId(medalje[1]), 'medalje.bronza': new ObjectId(medalje[2])},
            {new: true},
            (err, takm)=>{
              if (err) console.log(err);
              else if (takm) {

                const odgovor = {
                  uspesno: true,
                  poruka: 'Успешно унети резултати.'
                }
                res.json(odgovor);

              } else {

                const odgovor = {
                  uspesno: false,
                  poruka: 'Грешка приликом уноса резултата.'
                }
                res.json(odgovor);

              }
            }
          );

        } else {
          const odgovor = {
            uspesno: false,
            poruka: 'Грешка приликом уноса резултата.'
          }
          res.json(odgovor);
        }
      }
    );


  }

  zavrsiRundu = (req: express.Request, res: express.Response)=>{

    let takmicenje = req.body.takmicenje;
    let runda = req.body.runda;
    let rezultati = req.body.rezultati;

    Runda.update(
      {'_id': new ObjectId(runda)},
      {
        'rezultati.rezultati': rezultati,
        'odigrana': true
      },
      {new: true},
      (err, runda)=>{
        if (err) console.log(err);
        else if (runda) {

          Takmicenje.update(
            {'_id': new ObjectId(takmicenje)},
            {'status': 1},
            {new: true},
            (err, takm)=>{

              if (err) console.log(err);
              else if (takm) {
                const odgovor = {
                  uspesno: true,
                  poruka: 'Успешно архивирана рунда.'
                }
                res.json(odgovor);
              } else {
                const odgovor = {
                  uspesno: false,
                  poruka: 'Грешка приликом уноса резултата.'
                }
                res.json(odgovor);
              }

            }
          );

        } else {

          const odgovor = {
            uspesno: false,
            poruka: 'Грешка приликом уноса резултата.'
          }
          res.json(odgovor);

        }
      }
    );

  }

  dohvatiZavrsenaTakmicenja = (req: express.Request, res: express.Response)=>{

    Takmicenje.find(
      {'status': 3},
      (err, takm)=>{

        if (err) console.log(err);
        else res.json(takm);

      }
    );

  }

  traziSportiste = (req: express.Request, res: express.Response)=>{

      let ime = req.body.ime;
      let prezime = req.body.prezime;
      let zemlja = req.body.zemlja;
      let sport = req.body.sport;

      var uslov = Sportista.find();

      if (ime.length>0) uslov.where("ime").equals(ime);
      if (prezime.length>0) uslov.where("prezime").equals(prezime);
      if (zemlja.length>0) uslov.where("zemlja").equals(new ObjectId(zemlja));
      if (sport.length>0) uslov.where("sport").equals(new ObjectId(sport));

      uslov.exec((err, sp)=>{
        if (err) console.log(err);
        else res.json(sp);
      }
    );

      // if (ime.length>0) uslov["ime"] = ime;
      // if (prezime.length>0) uslov["prezime"] = prezime;
      // if (zemlja.length>0) uslov["zemlja"] = new ObjectId(zemlja);
      // if (sport.length>0) uslov["sport"] = new ObjectId(sport);

      // Sportista.find(
      //   uslov,
      //   (err, sp)=>{
      //     if (err) console.log(err);
      //     else res.json(sp);
      //   }
      // );

  }

}
