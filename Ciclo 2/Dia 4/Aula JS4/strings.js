/*
var nome="Willian";
console.log(nome.length);
console.log(nome[0]);//w
*/

//MATCH
var palavras="Maçã doce";

//console.log(palavras.match(/D/gi));


//SEARCH
//console.log(palavras.search(/d/gi));

//REPLACE
/*
var str="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis neque excepturi officia quisquam nesciunt accusamus, quae reprehenderit a, expedita nostrum beatae dolor asperiores libero quis facere, aperiam voluptatum."

var mudarStr=str.replace(/voluptatum/gi,'Xxxx');
console.log(mudarStr);
*/

//LOCALECOMPARE
/*
var comp1="Comparar";
var comp2="comparar";
var c1=comp1.toLowerCase();
var c2=comp2.toLowerCase();
var comparacao=c1.localeCompare(c2);
console.log(comparacao);
*/

//TRIM
var p="  fpalavra+  "
var r=p.trim();
console.log(r);
var s=r.replace(/f/gi,'');
console.log(s);
sub_a=s.replace('+',' ');
console.log(`Removido: ${sub_a}`);

//TOLOCATESTRING
var valor=1.35;
var formatarMoeda= valor.toLocaleString('pt-BR',{
    style:'currency',
    currency:'BRL'
})
console.log(formatarMoeda);
