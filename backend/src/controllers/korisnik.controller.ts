import express from 'express';
import Korisnik from '../models/korisnik';
import Zahtev from '../models/zahtev';

export class KorisnikController {
  prijava = (req: express.Request, res: express.Response)=>{
    let korIme = req.body.korisnickoIme;
    let loz = req.body.lozinka;

    Korisnik.findOne({
      $or: [{'korisnickoIme': korIme}, {'email': korIme}],
      'lozinka': loz
    },
    (err, korisnik)=>{
      if (err) console.log(err);
      else res.json(korisnik);
    })
  };

  registracija = (req: express.Request, res: express.Response)=>{
    let korIme = req.body.korisnickoIme;
    let email = req.body.email;
    let loz = req.body.lozinka;
    let ime = req.body.ime;
    let prezime = req.body.prezime;
    let nacionalnost = req.body.nacionalnost;
    let uloga = req.body.uloga;

    let prolaz = true;
    let poklapanjeMejl = false;
    let poklapanjeIme = false;

    //Proveri ima li registrovan
    Korisnik.findOne({
      $or: [{'korisnickoIme': korIme}, {'email': email}]
    }, (err, korisnik)=>{
      if (err) console.log(err);
      else if (korisnik) { //Postoji vec registrovan korisnik
        prolaz = false;
        if (korisnik.get('korisnickoIme')==korIme) poklapanjeIme = true;
        if (korisnik.get('email')==email) poklapanjeMejl = true;
      } else { //Trazi dalje u zahtevima
        Zahtev.findOne({
          $or: [{'korisnickoIme': korIme}, {'email': email}]
        }, (err, zahtev)=>{
          if (err) console.log(err);
          else if (zahtev) { //Postoji vec zahtev sa tim kredencijalima
              prolaz = false;
              if (zahtev.get('korisnickoIme')==korIme) poklapanjeIme = true;
              if (zahtev.get('email')==email) poklapanjeMejl = true;

              const negativanOdgovor = {
                uspesno: prolaz,
                ime: poklapanjeIme,
                email: poklapanjeMejl,
              }

              res.json(negativanOdgovor);

          } else { //To je to, ubacuj u sistem

            let noviZahtev = new Zahtev({korisnickoIme: korIme, email: email, lozinka: loz, ime: ime, prezime: prezime, nacionalnost: nacionalnost, uloga: uloga});

            noviZahtev.save((err, zahtev)=>{
              if (err) {
                console.log(err);
                prolaz = false;
              }

              const odgovor = {
                uspesno: prolaz,
                ime: poklapanjeIme,
                email: poklapanjeMejl,
              }

              res.json(odgovor);

            });
          }
        });
      }
    });
  };

  promenaLozinke = (req: express.Request, res: express.Response)=>{

    let korIme = req.body.korisnickoIme;
    let staraLozinka = req.body.staraLozinka;
    let novaLozinka = req.body.novaLozinka;

    let uspesno = true;

    Korisnik.findOneAndUpdate({$and: [{'korisnickoIme': korIme}, {'lozinka': staraLozinka}]}, {'lozinka': novaLozinka}, {new: true}, (err, korisnik)=>{
      if (err) {
        console.log(err);
      } else {

        if (korisnik) {
          if (korisnik.get('lozinka')!=novaLozinka) {
            uspesno = false;
          }
        } else {
          uspesno = false;
        }

        const odgovor = {
          uspesno: uspesno
        }

        res.json(odgovor);

      }
    });

  }

}
