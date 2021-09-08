"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Zahtev = new Schema({
    korisnickoIme: String,
    email: String,
    lozinka: String,
    ime: String,
    prezime: String,
    nacionalnost: String,
    uloga: Number
});
exports.default = mongoose_1.default.model('Zahtev', Zahtev, 'zahtevi');
//# sourceMappingURL=zahtev.js.map