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
  const areaTriangulo = (base * height) / 2;
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
// Referência sobre concatenação de strings: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
// Referência ao colega @SrTonn pelo seu code review neste Desafio.
function concatName(arraString) {
  // seu código aqui
  let result = arraString[arraString.length - 1]+ ', '+ arraString[0];
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontosTotal = (wins * 3) + (ties * 1);
  return pontosTotal;
}

// Desafio 6
// Referência sobre FILTER: https://blog.betrybe.com/javascript/javascript-filter/
// Referência ao colega @SrTonn sobre o melhor entendimento do FILTER;
function highestCount(array1) {
  // seu código aqui
  let higherNumber = 0;
  array1.sort((a, b) => a - b);
  higherNumber = array1[array1.length];
  let result = array1.filter((value) => {
    // Função seta pode ser utilizada no lugar de escrever FUNCTION!
    if (value === higherNumber) return true;
    return false;
  });
  return result.length;
}

// Desafio 7
// Referência sobre o Math.abs: https://www.w3schools.com/jsref/jsref_abs.asp

function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distancia1 = Math.abs(mouse - cat1);
  let distancia2 = Math.abs(mouse - cat2);
  if (distancia1 === distancia2) {
    return 'os gatos trombam e o rato foge';
  } if (distancia1 < distancia2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(arrayInteiros) {
  let resultado = [];
  for (let index = 0; index < arrayInteiros.length; index += 1) {
    if (arrayInteiros[index] % 3 === 0 && arrayInteiros[index] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (arrayInteiros[index] % 3 === 0) {
      resultado.push('fizz');
    } else if (arrayInteiros[index] % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
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