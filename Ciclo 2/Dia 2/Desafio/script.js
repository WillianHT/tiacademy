var nome =  prompt("Digite seu nome abaixo");
var numero = prompt( nome + ", digite um número");

alert("Foi enviado uma " +typeof(numero) + "!");

alert ("A string será convertida para Number!");
var numero = parseInt(numero);

var booleana = (20==numero);
var soma = (20+numero);
var subtracao = (20-numero);
var resto = (20%numero);
var quadrado = (numero*numero);

document.write("1. Seja bem vindo(a):"+" " +nome + "<br>");
document.write("2. Você digitou o número:(" + numero +")"+ '<br>');
document.write ("3. O retorno da comparação booleana é:" + " " + booleana + "<br>");
document.write ("4. A soma dos valores é:" + " " + soma + "<br>");
document.write ("5. A subtração dos valores é:" + " " + subtracao + "<br>")
document.write ("6. O resto da divisão é de:" + " " + resto + "<br>")
document.write ("7. O quadrado do número digitado é:" + " " + quadrado + "<br>");

var fruta = prompt("Escolha uma dessas frutas e escreva o nome dela abaixo: Laranja, Uva, Pera ou Manga ");
switch(fruta){
    case "Laranja":
        document.write("8. Voce escolheu " + fruta);
    break;
    case "Uva":
        document.write("8. Voce escolheu " + fruta);
    break;
    case "Pera":
        document.write("8. Voce escolheu " + fruta);
    break;
    case "Manga":
        document.write("8. Voce escolheu " + fruta);
    break;
    default:
        document.write("8. A fruta " + fruta + " não fazia parte das opções da lista");
    break;
}
