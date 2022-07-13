function mascara_nome(){
   var nome = document.getElementById("nome").value;
   var filter_nome = /^([a-zA-Zà-úÀ-Ú]|\s+)+$/;
   if (!filter_nome.test(document.getElementById("nome").value)) {
      document.getElementById("nome").value = nome.substring(0, nome.length-1);
      document.getElementById("erro_nome").style.display = "inline";
      document.getElementById("erro_nome").innerHTML = "Apenas letras."
      document.getElementById("nome").style.borderColor = "#ff0000";
      document.getElementById("nome").style.outline = "#ff0000";
   } else{
      document.getElementById("erro_nome").style.display = "none";
      document.getElementById("nome").style.borderColor = "#808080";
      document.getElementById("nome").style.outline = "#808080";
   }
}

function verifica_nome(){
   var nome = document.getElementById("nome").value;
   if (nome.trim().length == 0){
      document.getElementById("erro_nome").style.display = "inline";
      document.getElementById("erro_nome").innerHTML = "Você precisa informar seu nome."
      document.getElementById("nome").style.borderColor = "#ff0000";
      document.getElementById("nome").style.outline = "#ff0000";
      return false;
   } else{
      return true;
   }
}

function mascara_cpf(){
   var cpf = document.getElementById("cpf").value;
   var filter_cpf = /^[ ]+$/;
   if(isNaN(cpf[cpf.length-1]) || filter_cpf.test(cpf[cpf.length-1])){
      document.getElementById("cpf").value = cpf.substring(0, cpf.length-1);
      document.getElementById("erro_cpf").style.display = "inline";
      document.getElementById("erro_cpf").innerHTML = "Apenas números.";
      document.getElementById("cpf").style.borderColor = "#ff0000";
      document.getElementById("cpf").style.outline = "#ff0000";
   } else {
      document.getElementById("erro_cpf").style.display = "none";
      document.getElementById("cpf").style.borderColor = "#808080";
      document.getElementById("cpf").style.outline = "#808080";
   }

   if (cpf.length == 3 || cpf.length == 7) document.getElementById("cpf").value += ".";
   if (cpf.length == 11) document.getElementById("cpf").value += "-";
}

function verifica_cpf(){
   var cpf = document.getElementById("cpf").value;
   if (cpf.length == 0){
      document.getElementById("erro_cpf").style.display = "inline";
      document.getElementById("erro_cpf").innerHTML = "Você precisa informar seu CPF.";
      document.getElementById("cpf").style.borderColor = "#ff0000";
      document.getElementById("cpf").style.outline = "#ff0000";
      return false;
   }
   if (cpf.length < 14){
      document.getElementById("erro_cpf").style.display = "inline";
      document.getElementById("erro_cpf").innerHTML = "CPF incompleto.";
      document.getElementById("cpf").style.borderColor = "#ff0000";
      document.getElementById("cpf").style.outline = "#ff0000";
      return false;
   } else{
      document.getElementById("erro_cpf").style.display = "none";
      document.getElementById("cpf").style.borderColor = "#808080";
      document.getElementById("cpf").style.outline = "#808080";
      return true;
   }
}

function verifica_email() {
   var filtro_email = /\S+@\S+\.\S+/;
   if (!filtro_email.test(document.getElementById("email").value)){
      document.getElementById("erro_email").style.display = "inline";
      document.getElementById("erro_email").innerHTML = "Verifique se seu e-mail está escrito corretamente.";
      document.getElementById("email").style.borderColor = "#ff0000";
      document.getElementById("email").style.outline = "#ff0000";
      if (document.getElementById("email").value.length == 0){
         document.getElementById("erro_email").innerHTML = "Você precisa informar seu e-mail.";
      }
      return false;
   } else {
      document.getElementById("erro_email").style.display = "none";
      document.getElementById("email").style.borderColor = "#808080";
      document.getElementById("email").style.outline = "#808080";
      return true;
   }
}

function mascara_nascimento(){
   var nascimento = document.getElementById("nascimento").value;
   var filtro_nascimento = /^[ ]+$/;
   if(isNaN(nascimento[nascimento.length-1]) || filtro_nascimento.test(nascimento[nascimento.length-1])){
      document.getElementById("nascimento").value = nascimento.substring(0, nascimento.length-1);
      document.getElementById("erro_nascimento").style.display = "inline";
      document.getElementById("erro_nascimento").innerHTML = "Apenas números.";
      document.getElementById("nascimento").style.borderColor = "#ff0000";
      document.getElementById("nascimento").style.outline = "#ff0000";
   } else {
      document.getElementById("erro_nascimento").style.display = "none";
      document.getElementById("nascimento").style.borderColor = "#808080";
      document.getElementById("nascimento").style.outline = "#808080";
   }
   if (nascimento.length == 2 || nascimento.length == 5) document.getElementById("nascimento").value += "/";
}

function verifica_nascimento(){
   var nascimento = document.getElementById("nascimento").value;
   var nasc = document.getElementById("nascimento").value;
   var nasc_array = nasc.split("/");
   nasc = nasc_array[1] + "/" + nasc_array[0] + "/" + nasc_array[2];

   var data = new Date();
   var ano = data.getFullYear();
   var mes = data.getMonth() + 1;
   var dia = data.getDate();
   var data_completa = mes + "/" + dia + "/" + ano;

   var data1 = new Date(nasc);
   var data2 = new Date(data_completa);
   var timeDiff = (data2.getTime() - data1.getTime());
   var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

   if (nascimento.length == 0){
      document.getElementById("erro_nascimento").style.display = "inline";
      document.getElementById("erro_nascimento").innerHTML = "A data de nascimento deve ser informada.";
      document.getElementById("nascimento").style.borderColor = "#ff0000";
      document.getElementById("nascimento").style.outline = "#ff0000";
      return false;
   }
   else if (nascimento.length != 10){
      document.getElementById("erro_nascimento").style.display = "inline";
      document.getElementById("erro_nascimento").innerHTML = "Você deve informar uma data válida.";
      document.getElementById("nascimento").style.borderColor = "#ff0000";
      document.getElementById("nascimento").style.outline = "#ff0000";
      return false;
   } 
   if (diffDays < 0 || isNaN(diffDays)){
      document.getElementById("erro_nascimento").style.display = "inline";
      document.getElementById("erro_nascimento").innerHTML = "Você deve informar uma data válida.";
      document.getElementById("nascimento").style.borderColor = "#ff0000";
      document.getElementById("nascimento").style.outline = "#ff0000";
      return false;
   } else {
      document.getElementById("erro_nascimento").style.display = "none";
      document.getElementById("nascimento").style.borderColor = "#000000";
      document.getElementById("nascimento").style.outline = "#000000";
      return true;
   }
}

function sel_fem(){
   document.getElementById("erro_genero").style.display = "none";
   document.getElementById("gen_fem").style.borderColor = "#808080";
   document.getElementById("gen_masc").style.borderColor = "#808080";
}

function sel_masc(){
   document.getElementById("erro_genero").style.display = "none";
   document.getElementById("gen_fem").style.borderColor = "#808080";
   document.getElementById("gen_masc").style.borderColor = "#808080";
}

function verifica_genero(){
   if (document.getElementById("fem").checked) {
      document.getElementById("erro_genero").style.display = "none";
      document.getElementById("gen_fem").style.borderColor = "#808080";
      document.getElementById("gen_masc").style.borderColor = "#808080";
      return true;
   } else if (document.getElementById("masc").checked) {
      document.getElementById("erro_genero").style.display = "none";
      document.getElementById("gen_fem").style.borderColor = "#808080";
      document.getElementById("gen_masc").style.borderColor = "#808080";
      return true;
   } else {
      document.getElementById("gen_fem").style.borderColor = "#ff0000";
      document.getElementById("gen_masc").style.borderColor = "#ff0000";
      document.getElementById("erro_genero").style.display = "inline";
      document.getElementById("erro_genero").innerHTML = "Você precisa selecionar um gênero.";
      return false;
   }
}

function verifica_senha(){
   var senha = document.getElementById("senha").value;
   if (senha.length == 0){
      document.getElementById("erro_senha").style.display = "inline";
      document.getElementById("erro_senha").innerHTML = "Você precisa definir uma senha.";
      document.getElementById("senha").style.borderColor = "#ff0000";
      document.getElementById("senha").style.outline = "#ff0000";
      return false;
   }
   if (senha.length < 8){
      document.getElementById("erro_senha").style.display = "inline";
      document.getElementById("erro_senha").innerHTML = "A senha deve ter pelo menos 8 caracteres.";
      document.getElementById("senha").style.borderColor = "#ff0000";
      document.getElementById("senha").style.outline = "#ff0000";
      return false;
   } else{
      document.getElementById("erro_senha").style.display = "none";
      document.getElementById("senha").style.borderColor = "#808080";
      document.getElementById("senha").style.outline = "#808080";
      return true;
   }
}

function verifica_confirma_senha(){
   var senha = document.getElementById("senha").value;
   var confirma_senha = document.getElementById("confirma_senha").value;
   if (confirma_senha.length == 0){
      document.getElementById("erro_confirma_senha").style.display = "inline";
      document.getElementById("erro_confirma_senha").innerHTML = "Você precisa confirmar a senha.";
      document.getElementById("confirma_senha").style.borderColor = "#ff0000";
      document.getElementById("confirma_senha").style.outline = "#ff0000";
      return false;
   }
   if (confirma_senha != senha){
      document.getElementById("erro_confirma_senha").style.display = "inline";
      document.getElementById("erro_confirma_senha").innerHTML = "A senha deve ser igual a anterior.";
      document.getElementById("confirma_senha").style.borderColor = "#ff0000";
      document.getElementById("confirma_senha").style.outline = "#ff0000";
      return false;
   } else{
      document.getElementById("erro_confirma_senha").style.display = "none";
      document.getElementById("confirma_senha").style.borderColor = "#808080";
      document.getElementById("confirma_senha").style.outline = "#808080";
      return true;
   }

}

function validar(){
   verifica_nome();
   verifica_cpf();
   verifica_email();
   verifica_nascimento();
   verifica_genero();
   verifica_senha();
   verifica_confirma_senha();
}

function limpar(){
   var reset_span = document.getElementsByTagName("span");
   var reset_borda = document.getElementsByTagName("input");
   for(let i = 0; i < reset_span.length; i++){
      reset_span[i].style.display = 'none';
   }
   for(let i = 0; i < reset_borda.length; i++){
      reset_borda[i].style.border = '1px solid gray';
   }
   document.getElementById('gen_fem').style.border = '1px solid gray';
   document.getElementById('gen_masc').style.border = '1px solid gray';
}

