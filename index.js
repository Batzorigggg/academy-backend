const username = window.prompt("Nevtreh ner");
const password = window.prompt("Nuuts ug");

const uldegdel = Math.floor(Math.random() * 10000000) + 10000;

console.log(uldegdel);

const nemeh = Number(prompt("nemeh mungu"));

const avah = Number(prompt("avah mungu"));

if( avah > uldegdel + nemeh)
{
    console.log("uldegdel hureltsehgui bn");
}
else{
console.log( (uldegdel + nemeh ) - avah);}