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
      document.getElementById("nome").style.borderColor = "#000000";
      document.getElementById("nome").style.outline = "#000000";
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
      document.getElementById("cpf").style.borderColor = "#000000";
      document.getElementById("cpf").style.outline = "#000000";
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
      document.getElementById("cpf").style.borderColor = "#000000";
      document.getElementById("cpf").style.outline = "#000000";
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
         document.getElementById("erro_email").innerHTML = "Você precisa informar um e-mail.";
      }
      return false;
   } else {
      document.getElementById("erro_email").style.display = "none";
      document.getElementById("email").style.borderColor = "#000000";
      document.getElementById("email").style.outline = "#000000";
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
      document.getElementById("nascimento").style.borderColor = "#000000";
      document.getElementById("nascimento").style.outline = "#000000";
   }
   if (nascimento.length == 2 || nascimento.length == 5) document.getElementById("nascimento").value += "/";
}

function verifica_nascimento(){
   var nascimento = document.getElementById("nascimento").value;
   if (nascimento.length == 0){
      document.getElementById("erro_nascimento").style.display = "inline";
      document.getElementById("erro_nascimento").innerHTML = "A data de nascimento deve ser informada.";
      document.getElementById("nascimento").style.borderColor = "#ff0000";
      document.getElementById("nascimento").style.outline = "#ff0000";
      return false;
   }
   if (nascimento.length != 10){
      document.getElementById("erro_nascimento").style.display = "inline";
      document.getElementById("erro_nascimento").innerHTML = "Você precisa informar uma data válida.";
      document.getElementById("nascimento").style.borderColor = "#ff0000";
      document.getElementById("nascimento").style.outline = "#ff0000";
      return false;
   } else{
      document.getElementById("erro_nascimento").style.display = "none";
      document.getElementById("nascimento").style.borderColor = "#000000";
      document.getElementById("nascimento").style.outline = "#000000";
      return true;
   }
}

function verifica_genero(){
   genero = document.querySelector('input[name="genero"]:checked').value;
   if (genero == 1 || genero == 2){
      return true;
   } else{
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
      document.getElementById("senha").style.borderColor = "#000000";
      document.getElementById("senha").style.outline = "#000000";
      return true;
   }
}

function verifica_confirma_senha(){
   var senha = document.getElementById("senha").value;
   var confirma_senha = document.getElementById("confirma_senha").value;
   if (confirma_senha != senha){
      document.getElementById("erro_confirma_senha").style.display = "inline";
      document.getElementById("erro_confirma_senha").innerHTML = "A senha deve ser igual a anterior.";
      document.getElementById("confirma_senha").style.borderColor = "#ff0000";
      document.getElementById("confirma_senha").style.outline = "#ff0000";
      return false;
   } else{
      document.getElementById("erro_confirma_senha").style.display = "none";
      document.getElementById("confirma_senha").style.borderColor = "#000000";
      document.getElementById("confirma_senha").style.outline = "#000000";
      return true;
   }

}

function validar(){
   if (verifica_nome() && 
      verifica_cpf() && 
      verifica_email() && 
      verifica_nascimento() &&
      verifica_genero() &&
      verifica_senha() && 
      verifica_confirma_senha()){
      alert('Cadastro realizado com sucesso!');
   } else {
      alert('Preencha todos os dados corretamente!');
   }
}

function limpar(){
   document.querySelector('#form').reset();
   var reset_span = document.getElementsByTagName("span");
   var reset_borda = document.getElementsByTagName("input");
   for(let i = 0; i < reset_span.length; i++){
      reset_span[i].style.display = 'none';
   }
   for(let i = 0; i < reset_borda.length; i++){
      reset_borda[i].style.border = '1px solid gray';
   }
}
