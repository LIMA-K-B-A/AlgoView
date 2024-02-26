const modeButton = document.getElementById('mode_button');

modeButton.addEventListener('click', () => {
    const body = document.getElementById('index_page');
    const modeIcon = document.getElementById('mode_icon');

    if (modeIcon.classList.contains('fa-moon')) {
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');

        body.classList.add('dark');
    } else {
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');

        body.classList.remove('dark');
    }
});

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
      alert(`Elemento ${elementoProcurado} encontrado na posição ${index}`);
    } else {
      alert(`Elemento ${elementoProcurado} não encontrado na pilha.`);
    }
  }