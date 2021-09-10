/*objetos*/

function Pessoa(nome, sobrenome, idade){
    this.nome=nome;
    this.sobrenome=sobrenome;
    this.idade=idade;
}

var ps1=new Pessoa("Willian","Henrique",23);//construtor
console.log("Nome "+ps1.nome+ " "+ps1.sobrenome+" idade:"+ps1.idade);

var ps2=new Pessoa("Leila");
console.log("Nome "+ps2.nome+" "+ps2.sobrenome);

var objPessoa={rg:'7767',cpf:'8989'};
//console.log(typeof(objPessoa));
console.log("RG:"+objPessoa.rg);

function Pessoa2(nome, sobrenome, idade){
    this.nome=nome;
    this.sobrenome=sobrenome;
    this.idade=idade;
    this.doc={
        rg:'777',
        cpf:'8989'
    }
}
var pessoa2=new Pessoa2("Flavio");
//console.log("Nome:"+ pessoa2.nome+' '+pessoa2.doc.rg);
console.log(`Nome ${pessoa2.nome} - Rg: ${pessoa2.doc.rg}`);
