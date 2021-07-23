function formatar(mascara, documento){
  var i = documento.value.length;
  var v = documento.value;
  var saida = mascara.substring(0,1);
  var texto = mascara.substring(i)
  
  if (texto.substring(0,1) != saida){
            documento.value += texto.substring(0,1);
  }
}

function mascara(i,t){

  let v = i.value;
function isnumber() {
  if(isNaN(v[v.length-1])){
    i.value = v.substring(0, v.length-1);
    return;
 }
  
}


  if(t == "data"){
     i.setAttribute("maxlength", "10");
     isnumber();     
     if (v.length == 2 || v.length == 5) i.value += "/";
  }

  if(t == "cpf"){
     i.setAttribute("maxlength", "14");
     isnumber();
     if (v.length == 3 || v.length == 7) i.value += ".";
     if (v.length == 11) i.value += "-";
  }
  if(t == "pass"){
     i.setAttribute("maxlength", "8");    
  }
  if(t == "cep"){
    i.setAttribute("maxlength", "9");
    isnumber();
    if (v.length == 5) i.value += "-";
 }

 if(t == "tel"){
  isnumber();
   if (v.length == 2) i.value = "(" + v + ") ";

    if(v[5] == 9){
       i.setAttribute("maxlength", "15");
       if (v.length == 10) i.value += "-";
    }else{
       i.setAttribute("maxlength", "14");
       if (v.length == 9) i.value += "-";
    }
  }
}