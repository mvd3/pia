import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Zahtev = new Schema({
  korisnickoIme: String,
  email: String,
  lozinka: String,
  ime: String,
  prezime: String,
  nacionalnost: String,
  uloga: Number
});

export default mongoose.model('Zahtev', Zahtev, 'zahtevi');
