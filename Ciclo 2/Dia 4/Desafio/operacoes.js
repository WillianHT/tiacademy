window.onload = function(){

    (()=>{
        let mostraProdutosCliente = document.querySelector("#content-produtos > ul#produtos");

        for (let idx in produtos){
            mostraProdutosCliente.innerHTML += `<li class=itemProduto data-preco=${produtos[idx].prodPreco}>${produtos[idx].proDesc}</li>`

        }
    })(produtos)




const itemProduto = document.querySelectorAll("#produtos > li.itemProduto");
const cestaDoCliente = document.querySelector("ul#cestaDoCliente");
const mostraTotalCompra = document.querySelector("#mostraTotalCompra");
const armazenaItem = [];
var totalPedido = 0;

itemProduto.forEach((item)=>{
    item.addEventListener('click',()=>{
    
        li = document.createElement("li");

        if(armazenaItem.indexOf(item.textContent) == -1){
            armazenaItem.push(item.textContent);
            cestaDoCliente.appendChild(li).textContent=item.textContent;
            totalPedido += Number(item.dataset.preco);
            mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR',{style: 'currency',currency:'BRL'});
        }else{
            alert(`Este item ${item.textContent} já está na cesta`);
        }
    });
})
  const removeCestaDoCliente=document.querySelectorAll("ul#cestaDoCliente");
  const lista = document.querySelector("ul#cestaDoCliente");
          removeCestaDoCliente.forEach((item) => {
      item.addEventListener('click', (itemCesta) => {

          var idx = armazenaItem.indexOf(itemCesta.target.textContent);
          if (idx > -1) {
              totalPedido -= Number(itemCesta.target.dataset.preco);
              cestaDoCliente.removeChild(lista.childNodes[idx]);
              armazenaItem.splice(idx, 1);
              mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
          }
      })
  })

}
