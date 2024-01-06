const stack = [];

  function atualizarPilha() {
    const stackDiv = document.getElementById('stack');
    stackDiv.innerHTML = '';

    for (let i = 0; i < stack.length; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.innerText = stack[i];
      stackDiv.appendChild(square);
    }
  }

  function inserirElemento() {
    const novoElemento = Math.floor(Math.random() * 100);
    stack.unshift(novoElemento);
    atualizarPilha();
  }

  function removerElemento() {
    if (stack.length > 0) {
      stack.shift();
      atualizarPilha();
    } else {
      alert('A pilha está vazia!');
    }
  }

  function procurarElemento() {
    const elementoProcurado = prompt('Digite o elemento a ser procurado:');
    const index = stack.indexOf(parseInt(elementoProcurado));

    if (index !== -1) {
      alert(`Elemento ${elementoProcurado} encontrado na posição ${index + 1}`);
    } else {
      alert(`Elemento ${elementoProcurado} não encontrado na pilha.`);
    }
  }