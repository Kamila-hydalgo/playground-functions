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
  let dist1 = Math.abs(lineA - lineB);
  let dist2 = Math.abs(lineB - lineC);
  let dist3 = Math.abs(lineA - lineC);

  if (lineA < (lineB + lineC) && lineA > dist2){
    return true;
  } else if (lineB < (lineA + lineC) && lineB > dist3){
    return true;
  } else if (lineC < (lineA + lineB) && lineC > dist1) {
    return true;
  } else {
    return false;
  }
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
