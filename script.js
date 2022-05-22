var criptografar = document.querySelector("#criptografar");
var descriptografar = document.querySelector("#descriptografar");
var entrada = document.querySelector("#entrada");
var saida = document.querySelector("#saida");
var escolha = document.querySelector("#metodo");
var metodo = "";
var opcao = "";
var botao = document.querySelector("#go");

function verificaMetodo() {
  escolha.onclick = function () {
    if (escolha.options[1].selected == true) {
      metodo = "base64";
      console.log(metodo);
    } else if (escolha.options[2].selected == true) {
      metodo = "cesar";
      console.log(metodo);
    }
  };
}
verificaMetodo();
function verificaOpcao() {
  criptografar.onclick = function () {
    opcao = "codificar";
    console.log(opcao);
  };

  descriptografar.onclick = function () {
    opcao = "decodificar";
    console.log(opcao);
  };
}
verificaOpcao();

var incremento = document.querySelector("#incremento");
var numero;
incremento.addEventListener("change", function () {
  numero = Number(incremento.value);
  console.log(numero);
});

function cifraDeCesar(entrada, descolamento) {
  var mensagemCodificada = "";
  var alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (var i = 0; i < entrada.length; i++) {
    if (entrada[i] === " ") {
      mensagemCodificada += " ";
    }
    var decodificada = alfabeto.indexOf(entrada[i]) + descolamento;
    if (alfabeto.includes(entrada[i])) {
      if (entrada[i] === entrada[i].toLocaleLowerCase())
        if (decodificada > 25) {
          var diferenteAteOZ = 25 - alfabeto.indexOf(entrada[i]);
          mensagemCodificada += alfabeto[descolamento - diferenteAteOZ - 1];
        } else {
          mensagemCodificada += alfabeto[decodificada];
        }
    }
  }

  return mensagemCodificada;
}

function DecoDeCesar(entrada, descolamento) {
  var mensagemCodificada = "";
  var alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (var i = 0; i < entrada.length; i++) {
    if (entrada[i] === " ") {
      mensagemCodificada += " ";
    }
    var decodificada = alfabeto.indexOf(entrada[i]) - descolamento;
    if (alfabeto.includes(entrada[i])) {
      if (entrada[i] === entrada[i].toLocaleLowerCase())
        if (decodificada > 25) {
          var diferenteAteOZ = 25 - alfabeto.indexOf(entrada[i]);
          mensagemCodificada += alfabeto[descolamento - diferenteAteOZ - 1];
        } else {
          mensagemCodificada += alfabeto[decodificada];
        }
    }
  }

  return mensagemCodificada;
}

function verifica(metodo, opcao) {
  if (metodo === "base64" && opcao === "codificar") {
    let input = btoa(entrada.value);
    saida.value = `${input}`;
  } else if (metodo === "base64" && opcao === "decodificar") {
    let input = atob(entrada.value);
    saida.value = `${input}`;
  } else if (metodo === "cesar" && opcao === "codificar") {
    let input = cifraDeCesar(entrada.value, numero);
    saida.value = `${input}`;
    console.log(input);
  } else if (metodo === "cesar" && opcao === "decodificar") {
    let input = DecoDeCesar(entrada.value, numero);
    saida.value = `${input}`;
    console.log(input);
  }
}

const form = document.forms["form"];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  verifica(metodo, opcao);
});
