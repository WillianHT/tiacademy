/*
var/ let const
*/
/*
var nome="Willian"; //variável global
let sobreNome="Henrique";
if(true){
    console.log("Var nome="+ nome);
    var nm=nome;
    console.log("Chamando o sobreNome "+sobreNome)
    let sn="Tambani";
    console.log(sobreNome);
}
var teste;
console.log("Meu nome é "+nm+" "+sobreNome+" "+sn)
console.log("Var nome="+ nm);
*/

var Pessoa={
    nome:"Willian",
    rua:"Rua Tal",
    ncasa:"777",
    dados:function(){
        document.write(
            "Nome..."+this.nome+"<br>"+
            "Rua..."+this.rua+"<br>"+
            "N. casa..."+this.ncasa+"<br>")
    }
}
Pessoa.dados();

console.log("Nome "+Pessoa.nome+
" Endereço "+Pessoa.rua+" N."+Pessoa.ncasa);