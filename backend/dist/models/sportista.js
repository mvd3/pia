"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Sportista = new Schema({
    _id: Schema.Types.ObjectId,
    ime: String,
    prezime: String,
    zemlja: Schema.Types.ObjectId,
    sport: Schema.Types.ObjectId,
    pol: Number
});
exports.default = mongoose_1.default.model('Sportista', Sportista, 'sportisti');
//# sourceMappingURL=sportista.js.map