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
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
