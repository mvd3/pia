"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
exports.default = mongoose_1.default.model('Sport', Sport, 'sportovi');
//# sourceMappingURL=sport.js.map