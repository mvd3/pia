import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Runda = new Schema({
  _id: Schema.Types.ObjectId,
  takmicenje: Schema.Types.ObjectId,
  naziv: String,
  finalna: Boolean,
  odigrana: Boolean,
  rezultati: {
    takmicari: [Schema.Types.ObjectId],
    rezultati: [String]
  }
});

export default mongoose.model('Runda', Runda, 'runde');
