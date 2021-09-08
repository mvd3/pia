"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
exports.default = mongoose_1.default.model('Takmicenje', Takmicenje, 'takmicenja');
//# sourceMappingURL=takmicenje.js.map