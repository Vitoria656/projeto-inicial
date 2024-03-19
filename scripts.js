var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");

var saida = document.getElementById("saida-de-dados");

var email = document.getElementById("email");

function alertar(event){
   //alert("Voce clicou no botão!!!! " nome.value);

     saida.innerText = "Nome: " + nome.value +
                     "\n Email: " + email.value +
                     "\n Telefone: " + telefone.value +
                     "\n CEP: " + cep.value +
                     "\n logradouro: " + logardouro.value +

                    

}
 