import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Zemlja = new Schema({
  _id: Schema.Types.ObjectId,
  naziv: String,
  kod: String,
  medalje: {
    zlato: Number,
    srebro: Number,
    bronza: Number
  }
});

export default mongoose.model('Zemlja', Zemlja, 'zemlje');
