"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hbs_1 = __importDefault(require("hbs"));
//HELPERS
hbs_1.default.registerHelper('getPeriodo', () => {
    return new Date().getFullYear();
});
