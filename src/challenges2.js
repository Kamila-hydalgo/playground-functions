// Desafio 10
function techList(array, name) {
  // seu código aqui
  let arrayOrd = array.sort();
  let list = [];
  for (let index of arrayOrd) {
    list.push({ tech: index, name });
  }
  if (list.length === 0) {
    return 'Vazio!';
  }
  return list;
}

// Desafio 11
// Referência: Ajuda dos colegas @SrTonn, Kesley Muniz e Polyana Sousa no desenvolvimento do código
function generatePhoneNumber(arraNumbers) {
  // seu código aqui.
  let contador = 0;
  let phoneNumber = '';
  let DDD = arraNumbers.slice(0, 2).join('');
  let firstDigits = arraNumbers.slice(2, 7).join('');
  let lastDigits = arraNumbers.slice(7).join('');
  // por ser os últimos número não preciso dizer a qnt final
  for (let index = 0; index < arraNumbers.length; index += 1) {
    for (let index2 = 0; index2 < arraNumbers.length; index2 += 1) {
      if (arraNumbers[index] === arraNumbers[index2]) {
        contador += 1;
      }
    }
    if (contador >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    contador = 0;
  }
  if (arraNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let number of arraNumbers) {
    if (number < 0 || number > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  phoneNumber = '(' + DDD + ') ' + firstDigits + '-' + lastDigits;
  return phoneNumber;
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
