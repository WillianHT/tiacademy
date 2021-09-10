window.onload = function(){

    const valor1 = document.querySelector("#valor1");
    const valor2 = document.querySelector("#valor2");
    const resultado = document.querySelector("#resultado");
    const btn = document.querySelector("#btn");

    btn.addEventListener('click', ()=>{

        var v1 = Number(valor1.value);
        var v2 = Number(valor2.value);
        var res = Number(resultado.value);
        var soma = v1 +  v2;
        
        if(res == soma){
            alert("A soma está correta!");
        }else{
            alert("A soma está incorreta");
        }
    });
}