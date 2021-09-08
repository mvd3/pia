import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Sport = new Schema({
  _id: Schema.Types.ObjectId,
  sport: String,
  discipline: [{
    sifra: String,
    disciplina: String,
    formatRezultata: String,
    brojSerija: String,
    raspolozivM: Boolean,
    raspolozivZ: Boolean,
    prijavljeniM: [{
      _id: Schema.Types.ObjectId
    }],
    prijavljeniZ: [{
      _id: Schema.Types.ObjectId
    }]
  }]
});

export default mongoose.model('Sport', Sport, 'sportovi');
