import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Zauzece = new Schema({
  _id: Schema.Types.ObjectId,
  takmicenje: Schema.Types.ObjectId,
  od: Date,
  do: Date,
  slobodno: Boolean
});

export default mongoose.model('Zauzece', Zauzece, 'zauzeca');
