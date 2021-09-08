"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
exports.default = mongoose_1.default.model('Runda', Runda, 'runde');
//# sourceMappingURL=runda.js.map