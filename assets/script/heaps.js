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

// Array que representa o heap
let heap = [];

// Função para atualizar a visualização do heap
function atualizarHeap() {
    const heapDiv = document.getElementById('heap');
    heapDiv.innerHTML = '';

    for (let i = 0; i < heap.length; i++) {
        const nodeDiv = document.createElement('div');
        nodeDiv.classList.add('node');
        nodeDiv.innerText = heap[i];
        heapDiv.appendChild(nodeDiv);
    }
}

// Função para inserir um elemento no heap
function inserirElemento() {
    const novoElemento = Math.floor(Math.random() * 100); // Gerando um elemento aleatório para inserir no heap
    heap.push(novoElemento);
    heapifyUp(heap.length - 1);
    atualizarHeap(); // Atualiza a visualização do heap após a inserção
}

// Função para corrigir o heap após inserção
function heapifyUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    while (index > 0 && heap[parentIndex] < heap[index]) {
        [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]]; // Troca os elementos
        index = parentIndex;
        parentIndex = Math.floor((index - 1) / 2);
    }
}

// Função para remover o elemento máximo (no caso de um heap máximo)
function removerElementoMax() {
    if (heap.length === 0) {
        alert('O heap está vazio!');
        return;
    }

    heap[0] = heap.pop();
    heapifyDown(0);
    atualizarHeap(); // Atualiza a visualização do heap após a remoção
}

// Função para corrigir o heap após remoção
function heapifyDown(index) {
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;
    let maxIndex = index;

    if (leftChildIndex < heap.length && heap[leftChildIndex] > heap[maxIndex]) {
        maxIndex = leftChildIndex;
    }

    if (rightChildIndex < heap.length && heap[rightChildIndex] > heap[maxIndex]) {
        maxIndex = rightChildIndex;
    }

    if (maxIndex !== index) {
        [heap[index], heap[maxIndex]] = [heap[maxIndex], heap[index]]; // Troca os elementos
        heapifyDown(maxIndex);
    }
}
