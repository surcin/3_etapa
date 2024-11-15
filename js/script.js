function soma(valor,selecionado) {
    let total = document.getElementById('total').value;
    
    if(selecionado){
        total = Number(total) + Number(valor);
    }
    else{
        total = Number(total) - Number(valor);
    }

    document.getElementById('total').value = total;
}  


function trocar(desc) {
  document.getElementById('desc').value = desc;

  
}


