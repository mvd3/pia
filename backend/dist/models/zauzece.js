"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Zauzece = new Schema({
    _id: Schema.Types.ObjectId,
    takmicenje: Schema.Types.ObjectId,
    od: Date,
    do: Date,
    slobodno: Boolean
});
exports.default = mongoose_1.default.model('Zauzece', Zauzece, 'zauzeca');
//# sourceMappingURL=zauzece.js.map