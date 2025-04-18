"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors = require('cors');
const corsOptions = {
    origin: [],
    successStatus: 200
};
app.use(express_1.default.json());
app.use(cors(corsOptions));
app.post('/contact', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        res.status(200).json({ message: "login success!", data: req.body });
    }
    catch (e) {
        console.log(e);
        res.status(400).json({ message: "problem logging in", data: e });
    }
}));
app.listen(3000, () => {
    console.log("Server is listening on port 3000...");
});
