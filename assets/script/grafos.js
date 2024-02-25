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

// Definindo o estado inicial
let nodes = [];
let links = [];
let currentColorNode = 1;
let isMenuOpen = false;
let selectedOperation = '';

// Função para atualizar o estado do menu
const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    const menu = document.getElementById('menu');
    menu.style.display = isMenuOpen ? 'block' : 'none'; // Exibe o menu se isMenuOpen for true, caso contrário, oculta
    render();
  };
  

// Função para manipular a seleção de operação
const handleOperationClick = (operation) => {
  selectedOperation = operation;
  switch (operation) {
    case 'Gerar Grafo Aleatório':
      generateRandomGraph();
      break;
    case 'Gerar Grafo Específico':
      generateSpecificGraph();
      break;
    case 'Limpar Grafo':
      clearGraph();
      break;
    case 'Inserir novo nó':
      insertNode();
      break;
    case 'Excluir nó':
      deleteNode();
      break;
    case 'Buscar nó':
      searchNode();
      break;
    default:
      break;
  }
  toggleMenu(); // Fechar o menu após a seleção da operação
};

// Função para mudar a cor do nó atual
const changeNodeColor = () => {
  currentColorNode = (currentColorNode % nodes.length) + 1;
};

// Função para inserir um novo nó
const insertNode = () => {
  const newNodeValue = parseInt(prompt('Insira o valor para o novo nó:'));
  if (isNaN(newNodeValue)) {
    alert('Valor inválido. Insira um número.');
    return;
  }

  if (nodes.find(node => node.id === newNodeValue)) {
    alert(`O nó com valor ${newNodeValue} já existe.`);
    return;
  }

  const newNode = { id: newNodeValue, x: Math.random() * 500, y: Math.random() * 300 };
  nodes.push(newNode);
  changeNodeColor();
  render();
};

// Função para buscar um nó
const searchNode = () => {
  const searchValue = parseInt(prompt('Insira o valor do nó a ser buscado:'));
  const node = nodes.find(node => node.id === searchValue);
  if (node) {
    currentColorNode = node.id;
  } else {
    alert('Nó não encontrado!');
  }
  render();
};

// Função para excluir um nó
const deleteNode = () => {
  const deleteValue = parseInt(prompt('Insira o valor do nó a ser excluído:'));
  nodes = nodes.filter(node => node.id !== deleteValue);
  links = links.filter(link => link.source !== deleteValue && link.target !== deleteValue);
  render();
};

// Função para limpar o grafo
const clearGraph = () => {
  nodes = [];
  links = [];
  render();
};

// Função para gerar um grafo aleatório
const generateRandomGraph = () => {
  const numNodes = Math.floor(Math.random() * 5) + 1;
  const randomNodes = Array.from({ length: numNodes }, (_, i) => ({
    id: i + 1,
    x: Math.random() * 500,
    y: Math.random() * 300
  }));
  const randomLinks = [];
  for (let i = 0; i < numNodes; i++) {
    const source = randomNodes[i].id;
    const target = Math.floor(Math.random() * numNodes) + 1;
    if (source !== target) {
      randomLinks.push({ source, target });
    }
  }
  nodes = randomNodes;
  links = randomLinks;
  currentColorNode = 1;
  render();
};

// Função para gerar um grafo específico
const generateSpecificGraph = () => {
  const newNodes = [];
  alert('Insira os valores para os nós específicos.');
  for (let i = 0; i < 5; i++) {
    const nodeValue = parseInt(prompt(`Insira o valor para o nó ${i + 1}:`));
    newNodes.push({ id: nodeValue, x: Math.random() * 500, y: Math.random() * 300 });
  }
  const newLinks = [];
  nodes = newNodes;
  links = newLinks;
  currentColorNode = 1;
  render();
};

// Função para renderizar o grafo
const render = () => {
  const graphContainer = document.getElementById('graph-container');
  graphContainer.innerHTML = ''; // Limpar o conteúdo anterior
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', 'graph');

  // Adicionar os links
  links.forEach((link, index) => {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('class', 'link');
    line.setAttribute('x1', nodes[link.source - 1].x);
    line.setAttribute('y1', nodes[link.source - 1].y);
    line.setAttribute('x2', nodes[link.target - 1].x);
    line.setAttribute('y2', nodes[link.target - 1].y);
    svg.appendChild(line);
  });

  // Adicionar os nós
  nodes.forEach(node => {
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('class', node.id === currentColorNode ? 'node active' : 'node');
    circle.setAttribute('cx', node.x);
    circle.setAttribute('cy', node.y);
    circle.setAttribute('r', 20);
    group.appendChild(circle);
    
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', node.x);
    text.setAttribute('y', node.y + 5);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('fill', '#fff');
    text.setAttribute('font-size', '16');
    text.textContent = node.id;
    group.appendChild(text);

    svg.appendChild(group);
  });

  graphContainer.appendChild(svg);
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  render();
  const menuButton = document.getElementById('menu-button');
  menuButton.addEventListener('click', toggleMenu);
});
