const stack = [];

function atualizarPilha() {
    const stackDiv = document.getElementById('stack');
    stackDiv.innerHTML = '';
    
    // Adiciona o estilo 'display: flex;' à stackDiv
    stackDiv.style.display = 'flex';

    for (let i = 0; i < stack.length; i++) {
        const groupDiv = document.createElement('div');
        groupDiv.classList.add('group');

        const square = document.createElement('div');
        square.classList.add('listas');
        square.innerText = stack[i];
        groupDiv.appendChild(square);

        const pointer = document.createElement('div');
        pointer.classList.add('ponteiro');
        pointer.innerText = 'ponteiro';
        groupDiv.appendChild(pointer);

        const arrow = document.createElement('img');
        arrow.classList.add('arrow');
        arrow.src = "/assets/img/Arrow.svg";
        
        const arrowAndNullDiv = document.createElement('div');
        arrowAndNullDiv.appendChild(arrow);

        groupDiv.appendChild(arrowAndNullDiv);

        stackDiv.appendChild(groupDiv);
    }

    // Adiciona div 'null' à direita da seta (arrow)
    if (stack.length > 0) {
        const nullSquare = document.createElement('div');
        nullSquare.classList.add('listas');
        nullSquare.innerText = 'null';

        const arrowAndNullDiv = document.createElement('div');
        arrowAndNullDiv.appendChild(nullSquare);

        stackDiv.appendChild(arrowAndNullDiv);
    }
}

function inserirElemento() {
    const novoElemento = Math.floor(Math.random() * 100);
    stack.push(novoElemento);
    atualizarPilha();
}

function removerElemento() {
    if (stack.length > 0) {
        stack.pop();
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

// Chamando a função inicialmente para exibir a pilha vazia
atualizarPilha();
