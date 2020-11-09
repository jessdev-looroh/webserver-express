"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
const hbs_1 = __importDefault(require("hbs"));
require("./hbs/helpers");
const port = process.env.PORT || 3000;
//EXPRESS HBS ENGINE
hbs_1.default.registerPartials(__dirname + "/views/parciales");
app.use(express_1.default.static(__dirname + '/public'));
app.set('views', path_1.default.join(__dirname, '/views'));
app.set('view engine', 'hbs');
app.listen(port, () => {
    console.log("Escuchando peticiones el puerto: ", port);
});
app.get("/", function (req, res) {
    res.render('home', {
        nombre: "jess"
    });
});
app.get("/about", function (req, res) {
    res.render('about');
});
