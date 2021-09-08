import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Takmicenje = new Schema({
  _id: Schema.Types.ObjectId,
  naziv: String,
  sport: Schema.Types.ObjectId,
  disciplina: String,
  kategorija: Number,
  delegat: String,
  status: Number,
  medalje: {
    zlato: Schema.Types.ObjectId,
    srebro: Schema.Types.ObjectId,
    bronza: Schema.Types.ObjectId
  }
});

export default mongoose.model('Takmicenje', Takmicenje, 'takmicenja');
