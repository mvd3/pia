import mongoose from 'mongoose';
import Zauzece from './zauzece';

const Schema = mongoose.Schema;

let Lokacija = new Schema({
  _id: Schema.Types.ObjectId,
  ime: String,
  sport: Schema.Types.ObjectId,
  zauzece: [{
    _id: Schema.Types.ObjectId
  }]
});

export default mongoose.model('Lokacija', Lokacija, 'lokacije')
