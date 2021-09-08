"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const korisnik_controller_1 = require("../controllers/korisnik.controller");
const korisnikRouter = express_1.default.Router();
korisnikRouter.route('/prijava').post((req, res) => new korisnik_controller_1.KorisnikController().prijava(req, res));
korisnikRouter.route('/registracija').post((req, res) => new korisnik_controller_1.KorisnikController().registracija(req, res));
korisnikRouter.route('/promena-lozinke').post((req, res) => new korisnik_controller_1.KorisnikController().promenaLozinke(req, res));
exports.default = korisnikRouter;
//# sourceMappingURL=korisnik.routes.js.map