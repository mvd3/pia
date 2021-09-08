import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Sportista = new Schema({
  _id: Schema.Types.ObjectId,
  ime: String,
  prezime: String,
  zemlja: Schema.Types.ObjectId,
  sport: Schema.Types.ObjectId,
  pol: Number
});

export default mongoose.model('Sportista', Sportista, 'sportisti');
