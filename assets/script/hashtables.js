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

// Declaração da hash table
const hashTable = {};

// Função para atualizar a exibição da hash table na página HTML
function atualizarHashTable() {
    const hashTableDiv = document.getElementById('stack');
    hashTableDiv.innerHTML = '';

    for (let key in hashTable) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.textContent = `${key}: ${hashTable[key]}`;
        hashTableDiv.appendChild(square);
    }
}

// Função para inserir um elemento na hash table
function inserirElemento() {
    const chave = prompt('Digite a chave:');
    const valor = prompt('Digite o valor:');
    hashTable[chave] = valor;
    atualizarHashTable();
}

// Função para remover um elemento da hash table
function removerElemento() {
    const chave = prompt('Digite a chave do elemento a ser removido:');
    if (hashTable[chave]) {
        delete hashTable[chave];
        atualizarHashTable();
    } else {
        alert('Elemento não encontrado na hash table!');
    }
}

// Função para procurar um elemento na hash table
function procurarElemento() {
    const chave = prompt('Digite a chave do elemento a ser procurado:');
    if (hashTable[chave]) {
        alert(`Valor associado à chave ${chave}: ${hashTable[chave]}`);
    } else {
        alert('Elemento não encontrado na hash table!');
    }
}

// Chamando a função inicialmente para exibir a hash table vazia
atualizarHashTable();

