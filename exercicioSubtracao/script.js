let txtNumero1 = document.getElementById("txtNumero1")
let txtNumero2 = document.getElementById("txtNumero2")
let mensagem = document.getElementById("mensagem")

function subtrair() {

  let numero1 = Number(txtNumero1.value)
  let numero2 = Number(txtNumero2.value)

  let subtracao = numero1 - numero2

  mensagem.textContent = "Resultado: " + subtracao
  console.log("Resultado: " + subtracao);
}