/*concat() junta os elementos de dois ou mais arrays e retorna uma
copia com os elementos juntos*/

var frutas = ["Uva","Banana","Amora","Melão"];// var frutas = Array()
console.log(`Qtd do array: ${frutas.length} frutas: ${frutas[0]}`);

var frutas2 =["Maçã","Pera","Laranja"];

var todasAsFrutas = frutas.concat(frutas2);

console.log(frutas);
console.log(todasAsFrutas);

/* indexOf() procura por um elemento especifico no array e retorna a 
sua posição */
var retornoIndexOf = todasAsFrutas.indexOf("Amora");
console.log(retornoIndexOf);//2


/* join() junta todos os elementos de um array em uma string*/

var stringDeArray = todasAsFrutas.join();
console.log(stringDeArray);

/* push () insere um novo elemento no final do array */

var outraLista = ["Bola","Peteca"];
var novaLista = outraLista.push("Boneca","Qualquer brinquedo");


console.log(novaLista);
console.log(outraLista[3]);


/* pop() remove o ultimo elemento do array*/

console.log(outraLista.pop());

console.log(outraLista);

/*reverse() inverte os elementos do array*/

console.log(outraLista.reverse());

/*shift() remove o primeiro elemento do array*/

var removerPrimeiro = ["fusca","variante"];
removerPrimeiro.shift();
console.log(removerPrimeiro);

/*sort() ordena os elementos do array em ordem crescente*/

var alfa = [4,6,9,2];
alfa.sort();
console.log(alfa);

/*toString() converte um array em string e retorna a
sua posição*/

//vide join

/*unshift() insere um novo elemento no inicio*/
alfa.unshift(10);
console.log(alfa);

alfa.sort();
console.log(alfa);

/*splice() corta o array em um ponto indicado dois parametros indeice e
quantos elementos quer remover a partir da posição.. */

var f = ["Uva","Banana","Amora","Melão"]; //var frutas = Array()
var idx = f.indexOf("Banana");
console.log(idx);
console.log(f.splice(idx,2));
console.log(f);

// var r = f.splice();
// console.log(f.splice(2,1));




// arrays de objetos

var dados = [
	{nome:"Marcelo"},
	{nome:"Raphael"}

];
// console.log(dados[0].nome);
// console.log(dados[1].nome);

function Pessoa2(nome,sobrenome, idade, doc=[]){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
	this.doc = {
		rg: doc[0], 
		cpf: doc[1]
	}
}

var pessoa2 = new Pessoa2("Raphael", "","",['22', '555']);
// console.log("Nome "+pessoa2.nome+" "+pessoa2.doc.rg);
console.log(`Nome ${pessoa2.nome} - cpf: ${pessoa2.doc.cpf}`);


