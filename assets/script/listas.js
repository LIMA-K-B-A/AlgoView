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

const outraPilha = [];

function atualizarPilha() {
    const outraPilhaDiv = document.getElementById('outraPilha');
    outraPilhaDiv.innerHTML = '';
    
    // Adiciona o estilo 'display: flex;' à outraPilhaDiv
    outraPilhaDiv.style.display = 'flex';

    for (let i = 0; i < outraPilha.length; i++) {
        const groupDiv = document.createElement('div');
        groupDiv.classList.add('group');

        const square = document.createElement('div');
        square.classList.add('listas');
        square.innerText = outraPilha[i];
        groupDiv.appendChild(square);

        const pointer = document.createElement('div');
        pointer.classList.add('ponteiro');
        pointer.innerText = 'Ponteiro';
        groupDiv.appendChild(pointer);

        const arrow = document.createElement('img');
        arrow.classList.add('arrow');
        arrow.src = "/assets/img/Arrow.svg";
        
        const arrowAndNullDiv = document.createElement('div');
        arrowAndNullDiv.appendChild(arrow);

        groupDiv.appendChild(arrowAndNullDiv);

        outraPilhaDiv.appendChild(groupDiv);
    }

    // Adiciona div 'null' à direita da seta (arrow)
    if (outraPilha.length > 0) {
        const nullSquare = document.createElement('div');
        nullSquare.classList.add('listas');
        nullSquare.innerText = 'null';

        const arrowAndNullDiv = document.createElement('div');
        arrowAndNullDiv.appendChild(nullSquare);

        outraPilhaDiv.appendChild(arrowAndNullDiv);
    }
}

function inserirElemento() {
    const novoElemento = Math.floor(Math.random() * 100);
    outraPilha.push(novoElemento);
    atualizarPilha();
}

function removerElemento() {
    if (outraPilha.length > 0) {
        outraPilha.pop();
        atualizarPilha();
    } else {
        alert('A pilha está vazia!');
    }
}

function procurarElemento() {
    const elementoProcurado = prompt('Digite o elemento a ser procurado:');
    const index = outraPilha.indexOf(parseInt(elementoProcurado));

    if (index !== -1) {
        alert(`Elemento ${elementoProcurado} encontrado na posição ${index}`);
    } else {
        alert(`Elemento ${elementoProcurado} não encontrado na pilha.`);
    }
}

// Chamando a função inicialmente para exibir a outraPilha vazia
atualizarPilha();
