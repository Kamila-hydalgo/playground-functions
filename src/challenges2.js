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
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let dif1 = Math.abs(lineA - lineB);
  let dif2 = Math.abs(lineB - lineC);
  let dif3 = Math.abs(lineA - lineC);

  if (lineA < (lineB + lineC) && lineA > dif2) {
    return true;
  } else if (lineB < (lineA + lineC) && lineB > dif3) {
    return true;
  } else if (lineC < (lineA + lineB) && lineC > dif1) {
    return true;
  } else {
    return false;
  }
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
