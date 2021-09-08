"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Lokacija = new Schema({
    _id: Schema.Types.ObjectId,
    ime: String,
    sport: Schema.Types.ObjectId,
    zauzece: [{
            _id: Schema.Types.ObjectId
        }]
});
exports.default = mongoose_1.default.model('Lokacija', Lokacija, 'lokacije');
//# sourceMappingURL=lokacija.js.map