const vector = [];

function atualizarVetor() {
  const vectorDiv = document.getElementById('vector');
  vectorDiv.innerHTML = '';

  for (let i = 0; i < vector.length; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.innerText = vector[i];
    vectorDiv.appendChild(square);
  }
}

function inserirElemento() {
  const novoElemento = Math.floor(Math.random() * 100);
  vector.push(novoElemento);
  atualizarVetor();
}

function removerElemento() {
  if (vector.length > 0) {
    vector.pop();
    atualizarVetor();
  } else {
    alert('O vetor está vazio!');
  }
}

function procurarElemento() {
  const elementoProcurado = prompt('Digite o elemento a ser procurado:');
  const index = vector.indexOf(parseInt(elementoProcurado));

  if (index !== -1) {
    alert(`Elemento ${elementoProcurado} encontrado na posição ${index + 1}`);
  } else {
    alert(`Elemento ${elementoProcurado} não encontrado no vetor.`);
  }
}
