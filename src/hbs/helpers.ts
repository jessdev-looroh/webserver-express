import hbs from "hbs";
//HELPERS
hbs.registerHelper('getPeriodo', ()=>{
    return new Date().getFullYear(); 
})
