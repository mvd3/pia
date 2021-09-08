import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Korisnik = new Schema({
  _id: Schema.Types.ObjectId,
  korisnickoIme: String,
  email: String,
  lozinka: String,
  ime: String,
  prezime: String,
  nacionalnost: String,
  uloga: Number
});

export default mongoose.model('Korisnik', Korisnik, 'korisnici');
