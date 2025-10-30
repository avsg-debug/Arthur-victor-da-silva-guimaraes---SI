/**** Escreva o código abaixo 👇******/

//1
function somar(a, b) {
  return a + b;
}
//2
function multiplicar(a, b) {
  return a * b;
}
//3
function subtrair(a, b) {
  return a - b;
}
//4
function dividir(a, b) {
  if (b === 0) {
    throw new Error("Erro: divisão por zero");

  }
  return a / b;
}
//5
function calcularMedia(n1, n2, n3, n4) {
  return (n1 + n2 + n3 + n4) / 4;
}
//6
function elevarPotencia(base, expoente) {
  return Math.pow(base, expoente);
}
//7
function calcularAreaRetangulo(largura, altura) {
  return largura * altura;
}
//8
function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "ímpar";
  }
}
//9
function calcularRaizQuadrada(numero) {
  return Math.sqrt(numero);
}
//10
function calcularHipotenusa(catetoA, catetoB) {
  return Math.sqrt(catetoA ** 2 + catetoB ** 2);
}



/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
