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

// Declaração da fila
const fila = [];

// Função para atualizar a exibição da fila na página HTML
function atualizarFila() {
    const filaDiv = document.getElementById('stack');
    filaDiv.innerHTML = '';

    for (let i = 0; i < fila.length; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.textContent = fila[i];
        filaDiv.appendChild(square);
    }
}

// Função para inserir um elemento na fila
function inserirElemento() {
    const novoElemento = Math.floor(Math.random() * 100);
    fila.push(novoElemento);
    atualizarFila();
}

// Função para remover um elemento da fila
function removerElemento() {
    if (fila.length > 0) {
        fila.shift();
        atualizarFila();
    } else {
        alert('A fila está vazia!');
    }
} 

// Função para procurar um elemento na fila
function procurarElemento() {
    const elementoProcurado = prompt('Digite o elemento a ser procurado:');
    const index = fila.indexOf(parseInt(elementoProcurado));

    if (index !== -1) {
        alert(`Elemento ${elementoProcurado} encontrado na posição ${index}`);
    } else {
        alert(`Elemento ${elementoProcurado} não encontrado na fila.`);
    }
}

// Chamando a função inicialmente para exibir a fila vazia
atualizarFila();

