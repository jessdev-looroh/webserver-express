import express from "express";
import path from 'path';
const app = express();
import hbs from 'hbs';
import './hbs/helpers';


const port = process.env.PORT || 3000;
//EXPRESS HBS ENGINE
hbs.registerPartials(__dirname+"/views/parciales");
app.use( express.static( __dirname+'/public'));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine','hbs');




app.listen(port,()=>{
    console.log("Escuchando peticiones el puerto: ",port);
});
app.get("/", function (req, res) {
  res.render('home',{
      nombre: "jess"
  });
});
app.get("/about",function (req,res) {
    res.render('about');    
})