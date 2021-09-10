window.onload = function(){
    const btn1 = document.querySelector(".btn-click");
    const legP = document.querySelector(".legenda");
    const cxTexto = document.querySelector("#texto");

    btn1.addEventListener("click", ()=>{  
        legP.innerHTML += cxTexto.value; 
    } );
    btn1.addEventListener("click", ()=>{          
    legP.innerHTML=" "; 
    });
    legP.addEventListener("mouseout", ()=>{
        alert("Teste")
    });
    const trocaSenha = document.querySelector("#verSenha");
    const cxSenha = document.querySelector("#senha");

    trocaSenha.addEventListener("click", ()=>{

    if(cxSenha.getAttribute("type") == "password"){
        cxSenha.setAttribute("type", "text")
    } else {
        cxSenha.setAttribute("type", "password")
    }    
    });

    const cxTrocaBg = document.querySelector("#cxTbg");
        cxTrocaBg.addEventListener("blur", ()=>{
        cxTrocaBg.setAttribute("class", ".corBg");
    });
    const valor1 = document.querySelector("#v1");
    const valor2 = document.querySelector("#v2");
    const btnSomar = document.querySelector("#soma");
    const spanResultado = document.querySelector("#resultado");

    btnSomar.addEventListener("click", ()=>{
        var cx1 = valor1.value;
        var cx2 = valor2.value;
        var r = Number(cx1) + Number(cx2);

        spanResultado.innerHTML = r;
    });

    const btnModal = document.querySelector("#chamarModal");
    const janelaM = document.querySelector("#janModal");
    const closeMod = document.querySelector("#fechaModal");
    
    btnModal.addEventListener("click", ()=>{
    janelaM.setAttribute("class", "modal"); 
    });
    closeMod.addEventListener("click", ()=>{
        janelaM.classList.remove("modal");
    });
}