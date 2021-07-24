// Armazena dados do produto no localStorage
function mascara(i, t) {
  let v = i.value;

  function isnumber() {
     if (isNaN(v[v.length - 1])) {
        i.value = v.substring(0, v.length - 1);
        return;
     }
  }

  if (t == "data") {
     i.setAttribute("maxlength", "10");
     isnumber();
     if (v.length == 2 || v.length == 5) i.value += "/";
  }

  if (t == "peso") {
     isnumber();
     if (v.length != 0) i.value = v + " kg";
  }

  if (t == "preco") {
    isnumber();
    if (v.length != 0) i.value = "R$ " + v;
  } 
}

function validDate(i) {
  let v = i.value;
  let dateregex = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(1[8][9]\d|1[9][0-9]\d|2[0]\d\d)$/;
  let data = new Date();
  let ano = data.getFullYear();
  let dataAno = v.substring(6,10);
 if ((v.length == 10 && !dateregex.test(v)) || dataAno > ano) {  
     i.value = '';
     return;
  }
}

document.getElementById('cadastrar-prod').addEventListener('click', function (e) {
  e.preventDefault();
  console.log("cheguei aqui");

  let nomeProd = document.getElementById('nome-prod');
  let codeProd = document.getElementById('code');
  let tipoProd = document.getElementById('tipo');
  let fabricanteProd = document.getElementById('fabricante');
  let modeloProd = document.getElementById('modelo');
  let fornecedorProd = document.getElementById('fornecedor');
  let unidProd = document.getElementById('unidade');
  let qtdProd = document.getElementById('quantidade');
  let pesoProd = document.getElementById('peso');
  let precoProd = document.getElementById('preco');
  let dataIncProd = document.getElementById('dt-inclusao');
  let descricaoProd = document.getElementById('end-descricao');

  let objProd;
  objProd = {
     nomeProd: nomeProd.value,
     codeProd: codeProd.value,
     tipoProd: tipoProd.value,
     fabricanteProd: fabricanteProd.value,
     modeloProd: modeloProd.value,
     fornecedorProd: fornecedorProd.value,
     unidProd: unidProd.value,
     qtdProd: qtdProd.value,
     pesoProd: pesoProd.value,
     precoProd: precoProd.value,
     dataIncProd: dataIncProd.value,
     descricaoProd: descricaoProd.value,
  };

  localStorage[codeProd.value] = JSON.stringify(objProd);
  nomeProd.value = "";
  codeProd.value = "";
  tipoProd.value = "";
  fabricanteProd.value = "";
  modeloProd.value = "";
  fornecedorProd.value = "";
  unidProd.value = "";
  qtdProd.value = "";
  pesoProd.value = "";
  precoProd.value = "";
  dataIncProd.value = "";
  descricaoProd.value = "";   

  let textButton = document.getElementById('cadastrar-prod')
  let msgLoading = `Carregando...`
  let msgSuccess = `Cadastrado com sucesso`
  textButton.textContent = msgLoading;
  setTimeout(() => {
     textButton.textContent = msgSuccess
  }, 1000)
  nomeProd.onfocus = function () {
     textButton.textContent = "Cadastrar novo produto"
  }

});