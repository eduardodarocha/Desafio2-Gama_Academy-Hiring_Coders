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

   if (t == "cpf") {
      i.setAttribute("maxlength", "14");
      isnumber();
      if (v.length == 3 || v.length == 7) i.value += ".";
      if (v.length == 11) i.value += "-";
   }

   if (t == "pass") {
      i.setAttribute("maxlength", "8");
   }

   if (t == "cep") {
      i.setAttribute("maxlength", "9");
      isnumber();
      if (v.length == 5) i.value += "-";
   }

   if (t == "tel") {
      isnumber();
      if (v.length == 2) i.value = "(" + v + ") ";

      if (v[5] == 9) {
         i.setAttribute("maxlength", "15");
         if (v.length == 10) i.value += "-";
      } else {
         i.setAttribute("maxlength", "14");
         if (v.length == 9) i.value += "-";
      }
   }
}
//Validar data
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


// Armazena dados do Cliente no localStorage
document.getElementById('enviar').addEventListener('click', function (e) {
   e.preventDefault();

   let nome = document.getElementById('nome');
   let email = document.getElementById('email');
   let password = document.getElementById('password');
   let cpf = document.getElementById('cpf');
   let dtnasc = document.getElementById('dtnasc');
   let telefone = document.getElementById('telefone');
   let cep = document.getElementById('cep');
   let endereco = document.getElementById('endereco');
   let numero = document.getElementById('numero');
   let complemento = document.getElementById('end-complemento');
   let bairro = document.getElementById('bairro');
   let cidade = document.getElementById('cidade');
   let estado = document.getElementById('estado');

   let obj;
   obj = {
      nome: nome.value,
      email: email.value,
      password: password.value,
      cpf: cpf.value,
      dtnasc: dtnasc.value,
      telefone: telefone.value,
      cep: cep.value,
      endereco: endereco.value,
      numero: numero.value,
      complemento: complemento.value,
      bairro: bairro.value,
      cidade: cidade.value,
      estado: estado.value
   };

   localStorage[cpf.value] = JSON.stringify(obj);
   nome.value = "";
   email.value = "";
   password.value = "";
   cpf.value = "";
   dtnasc.value = "";
   telefone.value = "";
   cep.value = "";
   endereco.value = "";
   numero.value = "";
   complemento.value = "";
   bairro.value = "";
   cidade.value = "";
   estado.value = "";

   let textButton = document.getElementById('enviar')
   let msgLoading = `Carregando...`
   let msgSuccess = `Cadastrado com sucesso`
   textButton.textContent = msgLoading;
   setTimeout(() => {
      textButton.textContent = msgSuccess
   }, 1000)
   nome.onfocus = function () {
      textButton.textContent = "Cadastrar novo cliente"
   }

});