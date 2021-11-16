// Desafio 10
function techList(array, name) {
  // seu código aqui
  let arrayOrd = array.sort();
  let list = [];
  for (let index of arrayOrd) {
    list.push({ tech: index, name: name });
  } 
  if (list.length === 0) {
    return 'Vazio!';
  }
  return list;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
// Refatoração do código feita com ajuda do colega Caio Swame.
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let dif = Math.abs(lineB - lineC);

  if (lineA < (lineB + lineC) && lineA > dif) {
    return true;
  }
  return false;
}

// Desafio 13
// Referência de extrair números de string(uso do MATCH): https://www.youtube.com/watch?v=pfkkdzeyx6U
// Entendimento do PARSEINT na monitoria do Thalles.
function hydrate(order) {
  // seu código aqui
  let numbers = order.match(/\d+/g);
  let soma = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    soma += parseInt(numbers[index], 10);
  }
  if (soma === 1) {
    soma += ' copo de água';
  } else if (soma > 1) {
    soma += ' copos de água';
  }

  return soma;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
