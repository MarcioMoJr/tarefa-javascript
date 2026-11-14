let txtnome = document.getElementById("txtnome")
let mensagem = document.getElementById("mensagem")

function mostrarNome() {
  let nome = txtnome.value
  mensagem.textContent = "Meu nome é " + nome
}