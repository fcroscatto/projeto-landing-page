document.addEventListener("DOMContentLoaded", function() {
  const botao = document.querySelector("button");
  botao.addEventListener("click", function() {
    const confirmacao = window.confirm("Desconto aplicado");
     if (confirmacao) {
     alert("Desconto aplicado!");
    }
  });
});

//------------------------------

function mudarBotao(event) {
  event.preventDefault();
  var button = document.querySelector(button);
  if (button.value === "Login") {
    button.value === "Logado";
  } else {
    button.value = "Login";
  }
}

//-------------------------

function capturarDados(event) {
  event.preventDefault();
  var nome = document.getElementById('nome-user').value;
  var email = document.getElementById('email-user').value;
  var assunto = document.getElementById('assunto-user').value;

  console.log("Nome: " + nome);
  console.log("Email: " + email);
  console.log("Assunto: " + assunto);

  if (confirm("As informações foram enviadas. Deseja continuar?")) {
    console.log("Assunto salvo com sucesso")
  } else {
    console.log("Digite novamente as informações")
  }
}
