"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakmicenjeController = void 0;
const sport_1 = __importDefault(require("../models/sport"));
const sportista_1 = __importDefault(require("../models/sportista"));
const zemlja_1 = __importDefault(require("../models/zemlja"));
const takmicenje_1 = __importDefault(require("../models/takmicenje"));
const lokacija_1 = __importDefault(require("../models/lokacija"));
const zauzece_1 = __importDefault(require("../models/zauzece"));
const korisnik_1 = __importDefault(require("../models/korisnik"));
const runda_1 = __importDefault(require("../models/runda"));
var ObjectId = require('mongoose').Types.ObjectId;
class TakmicenjeController {
    constructor() {
        this.dohvatiSportove = (req, res) => {
            sport_1.default.find({}, (err, sportovi) => {
                if (err)
                    console.log(err);
                else if (sportovi)
                    res.json(sportovi);
                else
                    console.log('Ne mogu se dohvatiti sportovi!');
            });
        };
        this.dohvatiSportisteZemlje = (req, res) => {
            let zemlja = req.body.zemlja;
            sportista_1.default.find({ 'zemlja': zemlja }, (err, sportisti) => {
                if (err)
                    console.log(err);
                else if (sportisti)
                    res.json(sportisti);
                else
                    console.log('Ne mogu se dohvatiti sportisti!');
            });
        };
        this.dodajSportistuZaDisciplinu = (req, res) => {
            let sport = req.body.sport;
            let pol = req.body.pol;
            let disciplina = req.body.disciplina;
            let sportista = req.body.sportista;
            let uspesno = false;
            let poruka = 'Дошло је до грешке у систему!';
            //{$and: [{'_id': new ObjectId(sport)}, {'discipline.sifra': disciplina}]}
            //ObjectId(`${sportista}`)
            if (pol == 0) { //Musko
                sport_1.default.findOneAndUpdate({ '_id': new ObjectId(sport), 'discipline.sifra': disciplina }, { $addToSet: { 'discipline.$.prijavljeniM': { '_id': new ObjectId(sportista) } } }, { new: true }, (err, sp) => {
                    if (err)
                        console.log(err);
                    else if (sp) {
                        uspesno = true;
                        poruka = 'Успешно извршена операција.';
                    }
                    const odgovor = {
                        uspesno: uspesno,
                        poruka: poruka
                    };
                    res.json(odgovor);
                });
            }
            else if (pol == 1) { //Zensko
                sport_1.default.findOneAndUpdate({ '_id': new ObjectId(sport), 'discipline.sifra': disciplina }, { $addToSet: { 'discipline.$.prijavljeniZ': { '_id': new ObjectId(sportista) } } }, { new: true }, (err, sp) => {
                    if (err)
                        console.log(err);
                    else if (sp) {
                        uspesno = true;
                        poruka = 'Успешно извршена операција.';
                    }
                    const odgovor = {
                        uspesno: uspesno,
                        poruka: poruka
                    };
                    res.json(odgovor);
                });
            }
            else { //greska
                const odgovor = {
                    uspesno: uspesno,
                    poruka: poruka
                };
                res.json(odgovor);
            }
        };
        this.dohvatiIdZemljePoKodu = (req, res) => {
            let kod = req.body.kod;
            zemlja_1.default.findOne({ 'kod': kod }, (err, zemlja) => {
                if (err)
                    console.log(err);
                else
                    res.json(zemlja.get('_id'));
            });
        };
        this.dohvatiZemlje = (req, res) => {
            zemlja_1.default.find({}, (err, zemlje) => {
                if (err)
                    console.log(err);
                else
                    res.json(zemlje);
            });
        };
        this.tvoriTakmicenje = (req, res) => {
            let sport = req.body.sport;
            let disciplina = req.body.disciplina;
            let kategorija = req.body.kategorija;
            let naziv = req.body.naziv;
            let dummyId = new ObjectId();
            let uspesno = false;
            let poruka = 'Дошло је до грешке приликом креирања такмичења!';
            let takmicenje = new takmicenje_1.default({ '_id': new ObjectId(),
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
                } });
            takmicenje.save((err, takm) => {
                if (err)
                    console.log(err);
                else if (takm) {
                    if (kategorija == 0) {
                        sport_1.default.findOneAndUpdate({ $and: [{ '_id': new ObjectId(sport) }, { 'discipline.sifra': disciplina }] }, { 'discipline.$.raspolozivM': false }, { new: true }, (err, sp) => {
                            if (err)
                                console.log(err);
                            else if (sp) {
                                uspesno = true;
                                poruka = 'Успешно креирано такмичење!';
                            }
                            const odgovor = {
                                uspesno: uspesno,
                                poruka: poruka
                            };
                            res.json(odgovor);
                        });
                    }
                    else {
                        sport_1.default.findOneAndUpdate({ $and: [{ '_id': new ObjectId(sport) }, { 'discipline.sifra': disciplina }] }, { 'discipline.$.raspolozivZ': false }, { new: true }, (err, sp) => {
                            if (err)
                                console.log(err);
                            else if (sp) {
                                uspesno = true;
                                poruka = 'Успешно креирано такмичење!';
                            }
                            const odgovor = {
                                uspesno: uspesno,
                                poruka: poruka
                            };
                            res.json(odgovor);
                        });
                    }
                }
            });
        };
        this.dohvatiTakmicenjaUPripremi = (req, res) => {
            takmicenje_1.default.find({ 'status': 0 }, (err, takm) => {
                if (err)
                    console.log(err);
                else
                    res.json(takm);
            });
        };
        this.dohvatiSport = (req, res) => {
            let sport = req.body.sport;
            sport_1.default.findOne({ '_id': new ObjectId(sport) }, (err, sport) => {
                if (err)
                    console.log(err);
                else
                    res.json(sport);
            });
        };
        this.dohvatiSportisteZaTakmicenje = (req, res) => {
            let sport = req.body.sport;
            let disciplina = req.body.disciplina;
            let kategorija = req.body.kategorija;
            let sportistiId = [];
            sport_1.default.findOne({ '_id': new ObjectId(sport) }, (err, sport) => {
                if (err)
                    console.log(err);
                else if (sport) { //Nadjen sport
                    for (let i = 0; i < sport.get('discipline').length; i++) { //Pretrazi discipline
                        if (sport.get('discipline')[i].sifra == disciplina) { //Nadjena disciplina
                            if (kategorija == 0) { //Muska kategorija
                                for (let j = 0; j < sport.get('discipline')[i].prijavljeniM.length; j++) {
                                    sportistiId.push(sport.get('discipline')[i].prijavljeniM[j]);
                                }
                            }
                            else { //Zenska kategorija
                                for (let j = 0; j < sport.get('discipline')[i].prijavljeniZ.length; j++) {
                                    sportistiId.push(sport.get('discipline')[i].prijavljeniZ[j]);
                                }
                            }
                            sportista_1.default.find({ '_id': { $in: sportistiId } }, (err, sp) => {
                                if (err)
                                    console.log(err);
                                else
                                    res.json(sp);
                            });
                            break; //Izlaz iz petlje
                        }
                    }
                }
            });
        };
        this.dohvatiLokacijeZaSport = (req, res) => {
            let sport = req.body.sport;
            lokacija_1.default.find({ 'sport': new ObjectId(sport) }, (err, lokacije) => {
                if (err)
                    console.log(err);
                else
                    res.json(lokacije);
            });
        };
        this.proveriZauzece = (req, res) => {
            let takmicenje = req.body.takmicenje;
            let lokacija = req.body.lokacijaOdrzavanja;
            let terminOd = new Date(req.body.od);
            let terminDo = new Date(req.body.do);
            let zauzeceId = [];
            let satOd;
            let satDo;
            let uspesno = false;
            let poruka = 'Дошло је до грешке!';
            lokacija_1.default.findOne({ '_id': new ObjectId(lokacija) }, (err, lok) => {
                if (err)
                    console.log(err);
                else if (lok) {
                    for (let i = 0; i < lok.get('zauzece').length; i++) { //Pogledaj zauzeca
                        zauzeceId.push(lok.get('zauzece')[i]);
                    }
                    zauzece_1.default.find({ '_id': { $in: zauzeceId } }, (err, zauzeca) => {
                        if (err)
                            console.log(err);
                        else if (zauzeca) {
                            uspesno = true;
                            for (let i = 0; i < zauzeca.length; i++) { //Prodji kroz rezevacije
                                if (terminOd.getDate() == zauzeca[i].get('od').getDate()
                                    && terminOd.getMonth() == zauzeca[i].get('od').getMonth()
                                    && ((terminOd.getHours() < zauzeca[i].get('do').getHours()
                                        && terminOd.getHours() > zauzeca[i].get('od').getHours())
                                        || (terminOd.getHours() < zauzeca[i].get('od').getHours()
                                            && terminDo.getHours() > zauzeca[i].get('do').getHours())
                                        || (terminDo.getHours() > zauzeca[i].get('od').getHours()
                                            && terminDo.getHours() < zauzeca[i].get('do').getHours())
                                        || (terminOd.getHours() == zauzeca[i].get('od').getHours())
                                        || (terminDo.getHours() == zauzeca[i].get('do').getHours()))) { //Zauzet termin
                                    uspesno = false;
                                    satOd = zauzeca[i].get('od').getHours();
                                    satDo = zauzeca[i].get('do').getHours();
                                    break;
                                }
                            }
                        }
                        else
                            uspesno = true;
                        if (uspesno)
                            poruka = 'Термин је слободан.';
                        else
                            poruka = `Термин се поклапа са термином ${satOd}-${satDo}.`;
                        const odg = {
                            uspesno: uspesno,
                            poruka: poruka
                        };
                        res.json(odg);
                    });
                }
                else { //Greska
                    const odg = {
                        uspesno: uspesno,
                        poruka: poruka
                    };
                    res.json(odg);
                }
            });
        };
        this.dohvatiSlobodneDelegate = (req, res) => {
            korisnik_1.default.find({ 'uloga': 2 }, (err, delegati) => {
                if (err)
                    console.log(err);
                else
                    res.json(delegati);
            });
        };
        this.organizujTakmicenje = (req, res) => {
            let takmicenje = JSON.parse(req.body.takmicenje);
            let delegat = req.body.delegat;
            let sportisti = req.body.sportisti;
            let rezervacije = JSON.parse(req.body.rezervacije);
            let uspesno = false;
            let poruka = 'Дошло је до грешке у систему!';
            let sportistiId = [];
            sportisti.forEach((s) => {
                sportistiId.push(new ObjectId(s));
            });
            takmicenje_1.default.findOneAndUpdate({ '_id': new ObjectId(takmicenje['_id']) }, { 'delegat': delegat, 'status': 1 }, { new: true }, (err, takm) => {
                if (err)
                    console.log(err);
                else if (takm) { //Uspesno
                    if (takmicenje['kategorija'] == 0) { //Muska kategorija
                        sport_1.default.findOneAndUpdate({ $and: [{ '_id': new ObjectId(takmicenje['sport']) }, { 'discipline.sifra': takmicenje['disciplina'] }] }, { $pull: { 'discipline.$.prijavljeniM': { '_id': { $nin: sportistiId } } } }, { new: true }, (err, sport) => {
                            if (err)
                                console.log(err);
                            else if (sport) {
                                uspesno = true;
                                poruka = 'Успешно обављена операција. Такмичење је организовано.';
                                const odg = {
                                    uspesno: uspesno,
                                    poruka: poruka
                                };
                                res.json(odg);
                            }
                        });
                    }
                    else { //Zenska kategorija
                        sport_1.default.findOneAndUpdate({ $and: [{ '_id': new ObjectId(takmicenje['sport']) }, { 'discipline.sifra': takmicenje['disciplina'] }] }, { $pull: { 'discipline.$.prijavljeniZ': { '_id': { $nin: sportistiId } } } }, { new: true }, (err, sport) => {
                            if (err)
                                console.log(err);
                            else if (sport) {
                                uspesno = true;
                                poruka = 'Успешно обављена операција. Такмичење је организовано.';
                                const odg = {
                                    uspesno: uspesno,
                                    poruka: poruka
                                };
                                res.json(odg);
                            }
                        });
                    }
                    for (let indeks in rezervacije) { //Prodji kroz sve rezervacije
                        for (let i = 0; i < rezervacije[indeks].length; i++) { //Prodji kroz sva zauzeca
                            let novoZauzece = new zauzece_1.default({ '_id': new ObjectId(),
                                'takmicenje': takmicenje['_id'],
                                'od': new Date(rezervacije[indeks][i]['od']),
                                'do': new Date(rezervacije[indeks][i]['do']),
                                'slobodno': true });
                            novoZauzece.save((err, zauz) => {
                                if (err)
                                    console.log(err);
                                else if (zauz) {
                                    lokacija_1.default.findOneAndUpdate({ '_id': new ObjectId(indeks) }, { $addToSet: { 'zauzece': { '_id': new ObjectId(novoZauzece.get('_id')) } } }, { new: true }, (err, lok) => {
                                    });
                                }
                            });
                        }
                    }
                }
                else { //Greska
                    const odg = {
                        uspesno: uspesno,
                        poruka: poruka
                    };
                    res.json(odg);
                }
            });
        };
        this.dohvatiTakmicenjaZaDelegata = (req, res) => {
            let delegat = req.body.delegat;
            takmicenje_1.default.find({ $and: [{ 'delegat': delegat }, { 'status': 1 }] }, (err, takm) => {
                if (err)
                    console.log(err);
                else
                    res.json(takm);
            });
        };
        this.dohvatiZauzecaZaTakmicenje = (req, res) => {
            let takmicenje = req.body.takmicenje;
            zauzece_1.default.find({ $and: [{ 'takmicenje': new ObjectId(takmicenje) }, { 'slobodno': true }] }, (err, zauzeca) => {
                if (err)
                    console.log(err);
                else
                    res.json(zauzeca);
            });
        };
        this.dodajRundu = (req, res) => {
            let takmicenje = req.body.takmicenje;
            let naziv = req.body.naziv;
            let finalna = req.body.finalna;
            let termin = req.body.termin;
            let takmicari = req.body.takmicari;
            let rezultati = req.body.rezultati;
            let takmicariId = [];
            let rezultatiZaUnos = [];
            for (let i = 0; i < takmicari.length; i++) {
                takmicariId.push(new ObjectId(takmicari[i]));
                rezultatiZaUnos.push(rezultati[i]);
            }
            let novaRunda = new runda_1.default({ '_id': new ObjectId(),
                'takmicenje': new ObjectId(takmicenje),
                'naziv': naziv,
                'finalna': finalna,
                'odigrana': false,
                'rezultati': {
                    'takmicari': takmicariId,
                    'rezultati': rezultatiZaUnos
                } });
            novaRunda.save((err, rnd) => {
                if (err)
                    console.log(err);
                else if (rnd) {
                    takmicenje_1.default.update(//Azuriraj takmicenje
                    { '_id': new ObjectId(takmicenje) }, { 'status': 2 }, { new: true }, (err, takm) => {
                        if (err)
                            console.log(err);
                        else if (takm) {
                            zauzece_1.default.update({ '_id': new ObjectId(termin) }, { 'slobodno': false }, { new: true }, (err, zauzece) => {
                                if (err)
                                    console.log(err);
                                else if (zauzece) {
                                    const odgovor = {
                                        uspesno: true,
                                        poruka: 'Успешно додата рунда.'
                                    };
                                    res.json(odgovor);
                                }
                                else {
                                    const odgovor = {
                                        uspesno: false,
                                        poruka: 'Грешка приликом додавања рунде.'
                                    };
                                    res.json(odgovor);
                                }
                            });
                            if (finalna) { //Zakljucaj neiskoriscene termine
                                zauzece_1.default.updateMany({ 'takmicenje': new ObjectId(takmicenje) }, { 'slobodno': false }, { 'new': true }, (err, zauzece) => { });
                            }
                        }
                        else {
                            const odgovor = {
                                uspesno: false,
                                poruka: 'Грешка приликом додавања рунде.'
                            };
                            res.json(odgovor);
                        }
                    });
                }
                else {
                    const odgovor = {
                        uspesno: false,
                        poruka: 'Грешка приликом додавања рунде.'
                    };
                    res.json(odgovor);
                }
            });
        };
        this.dohvatiTakmicenjaSaRundama = (req, res) => {
            let delegat = req.body.delegat;
            takmicenje_1.default.find({ $and: [{ 'delegat': delegat }, { 'status': 2 }] }, (err, takm) => {
                if (err)
                    console.log(err);
                else
                    res.json(takm);
            });
        };
        this.dohvatiRundu = (req, res) => {
            let takmicenje = req.body.takmicenje;
            runda_1.default.findOne({ $and: [{ 'takmicenje': takmicenje }, { 'odigrana': false }] }, (err, runda) => {
                if (err)
                    console.log(err);
                else
                    res.json(runda);
            });
        };
        this.dohvatiSportiste = (req, res) => {
            let sportisti = req.body.sportisti;
            let sportistiId = [];
            for (let i = 0; i < sportisti.length; i++) {
                sportistiId.push(new ObjectId(sportisti[i]));
            }
            sportista_1.default.find({ '_id': { $in: sportistiId } }, (err, spt) => {
                if (err)
                    console.log(err);
                else
                    res.json(spt);
            });
        };
        this.zavrsiTakmicenje = (req, res) => {
            let takmicenje = req.body.takmicenje;
            let runda = req.body.runda;
            let medalje = req.body.medalje;
            let rezultati = req.body.rezultati;
            runda_1.default.update({ '_id': new ObjectId(runda) }, { 'odigrana': true, 'rezultati.rezultati': rezultati }, { new: true }, (err, runda) => {
                if (err)
                    console.log(err);
                else if (runda) {
                    takmicenje_1.default.update({ '_id': new ObjectId(takmicenje) }, { 'status': 3, 'medalje.zlato': new ObjectId(medalje[0]), 'medalje.srebro': new ObjectId(medalje[1]), 'medalje.bronza': new ObjectId(medalje[2]) }, { new: true }, (err, takm) => {
                        if (err)
                            console.log(err);
                        else if (takm) {
                            const odgovor = {
                                uspesno: true,
                                poruka: 'Успешно унети резултати.'
                            };
                            res.json(odgovor);
                        }
                        else {
                            const odgovor = {
                                uspesno: false,
                                poruka: 'Грешка приликом уноса резултата.'
                            };
                            res.json(odgovor);
                        }
                    });
                }
                else {
                    const odgovor = {
                        uspesno: false,
                        poruka: 'Грешка приликом уноса резултата.'
                    };
                    res.json(odgovor);
                }
            });
        };
        this.zavrsiRundu = (req, res) => {
            let takmicenje = req.body.takmicenje;
            let runda = req.body.runda;
            let rezultati = req.body.rezultati;
            runda_1.default.update({ '_id': new ObjectId(runda) }, {
                'rezultati.rezultati': rezultati,
                'odigrana': true
            }, { new: true }, (err, runda) => {
                if (err)
                    console.log(err);
                else if (runda) {
                    takmicenje_1.default.update({ '_id': new ObjectId(takmicenje) }, { 'status': 1 }, { new: true }, (err, takm) => {
                        if (err)
                            console.log(err);
                        else if (takm) {
                            const odgovor = {
                                uspesno: true,
                                poruka: 'Успешно архивирана рунда.'
                            };
                            res.json(odgovor);
                        }
                        else {
                            const odgovor = {
                                uspesno: false,
                                poruka: 'Грешка приликом уноса резултата.'
                            };
                            res.json(odgovor);
                        }
                    });
                }
                else {
                    const odgovor = {
                        uspesno: false,
                        poruka: 'Грешка приликом уноса резултата.'
                    };
                    res.json(odgovor);
                }
            });
        };
        this.dohvatiZavrsenaTakmicenja = (req, res) => {
            takmicenje_1.default.find({ 'status': 3 }, (err, takm) => {
                if (err)
                    console.log(err);
                else
                    res.json(takm);
            });
        };
        this.traziSportiste = (req, res) => {
            let ime = req.body.ime;
            let prezime = req.body.prezime;
            let zemlja = req.body.zemlja;
            let sport = req.body.sport;
            var uslov = sportista_1.default.find();
            if (ime.length > 0)
                uslov.where("ime").equals(ime);
            if (prezime.length > 0)
                uslov.where("prezime").equals(prezime);
            if (zemlja.length > 0)
                uslov.where("zemlja").equals(new ObjectId(zemlja));
            if (sport.length > 0)
                uslov.where("sport").equals(new ObjectId(sport));
            uslov.exec((err, sp) => {
                if (err)
                    console.log(err);
                else
                    res.json(sp);
            });
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
        };
    }
}
exports.TakmicenjeController = TakmicenjeController;
//# sourceMappingURL=takmicenje.controller.js.map