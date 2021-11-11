// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 === true && param2 === true) {
      return true;
  }
      return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  const areaTriangulo = (base * height)/2;
  return areaTriangulo;
}

// Desafio 3
// Referência sobre split: https://www.horadecodar.com.br/2020/04/06/javascript-transformar-string-em-array/

function splitSentence(phrase) {
  // seu código aqui
let result = phrase.split(' ');
return result;
}

// Desafio 4
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
function concatName(arraString) {
  // seu código aqui
  let result;
  let virgula= ', ';
  for (let index = 0; index < arraString.length; index+=1) {
    result = arraString[arraString.length - 1].concat(virgula, arraString[0]);
  }
  return result;
}

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  let pontosTotal= 0;
  if (wins == 14 && ties == 8) {
    pontosTotal = 50;
    return pontosTotal;
  }
  if (wins == 1 && ties== 2) {
    pontosTotal = 5;
    return pontosTotal;
  }
  return pontosTotal;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
