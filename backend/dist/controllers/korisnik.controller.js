"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KorisnikController = void 0;
const korisnik_1 = __importDefault(require("../models/korisnik"));
const zahtev_1 = __importDefault(require("../models/zahtev"));
class KorisnikController {
    constructor() {
        this.prijava = (req, res) => {
            let korIme = req.body.korisnickoIme;
            let loz = req.body.lozinka;
            korisnik_1.default.findOne({
                $or: [{ 'korisnickoIme': korIme }, { 'email': korIme }],
                'lozinka': loz
            }, (err, korisnik) => {
                if (err)
                    console.log(err);
                else
                    res.json(korisnik);
            });
        };
        this.registracija = (req, res) => {
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
            korisnik_1.default.findOne({
                $or: [{ 'korisnickoIme': korIme }, { 'email': email }]
            }, (err, korisnik) => {
                if (err)
                    console.log(err);
                else if (korisnik) { //Postoji vec registrovan korisnik
                    prolaz = false;
                    if (korisnik.get('korisnickoIme') == korIme)
                        poklapanjeIme = true;
                    if (korisnik.get('email') == email)
                        poklapanjeMejl = true;
                }
                else { //Trazi dalje u zahtevima
                    zahtev_1.default.findOne({
                        $or: [{ 'korisnickoIme': korIme }, { 'email': email }]
                    }, (err, zahtev) => {
                        if (err)
                            console.log(err);
                        else if (zahtev) { //Postoji vec zahtev sa tim kredencijalima
                            prolaz = false;
                            if (zahtev.get('korisnickoIme') == korIme)
                                poklapanjeIme = true;
                            if (zahtev.get('email') == email)
                                poklapanjeMejl = true;
                            const negativanOdgovor = {
                                uspesno: prolaz,
                                ime: poklapanjeIme,
                                email: poklapanjeMejl,
                            };
                            res.json(negativanOdgovor);
                        }
                        else { //To je to, ubacuj u sistem
                            let noviZahtev = new zahtev_1.default({ korisnickoIme: korIme, email: email, lozinka: loz, ime: ime, prezime: prezime, nacionalnost: nacionalnost, uloga: uloga });
                            noviZahtev.save((err, zahtev) => {
                                if (err) {
                                    console.log(err);
                                    prolaz = false;
                                }
                                const odgovor = {
                                    uspesno: prolaz,
                                    ime: poklapanjeIme,
                                    email: poklapanjeMejl,
                                };
                                res.json(odgovor);
                            });
                        }
                    });
                }
            });
        };
        this.promenaLozinke = (req, res) => {
            let korIme = req.body.korisnickoIme;
            let staraLozinka = req.body.staraLozinka;
            let novaLozinka = req.body.novaLozinka;
            let uspesno = true;
            korisnik_1.default.findOneAndUpdate({ $and: [{ 'korisnickoIme': korIme }, { 'lozinka': staraLozinka }] }, { 'lozinka': novaLozinka }, { new: true }, (err, korisnik) => {
                if (err) {
                    console.log(err);
                }
                else {
                    if (korisnik) {
                        if (korisnik.get('lozinka') != novaLozinka) {
                            uspesno = false;
                        }
                    }
                    else {
                        uspesno = false;
                    }
                    const odgovor = {
                        uspesno: uspesno
                    };
                    res.json(odgovor);
                }
            });
        };
    }
}
exports.KorisnikController = KorisnikController;
//# sourceMappingURL=korisnik.controller.js.map