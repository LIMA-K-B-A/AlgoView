
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



// Quando o nó principal é clicado
document.querySelector('.mainNode').addEventListener('click', () => {
    // Exibe os ramos da primeira classe
    document.querySelectorAll('.branch1').forEach((e) => e.classList.add('show'));
    // Ativa as linhas de conexão relacionadas ao primeiro nó
    document.querySelectorAll('.tectopToB1').forEach((e) => e.classList.add('activeLine'));

    const arrow1 = document.createElement('img');

    const arrow2 = document.createElement('img');

    document.body.appendChild(arrow1); // Adiciona a primeira seta ao corpo do documento
    document.body.appendChild(arrow2);

    // Exibe o botão do número 5
    document.querySelector('.num5').classList.remove('hidden');
    document.querySelector('.num15').classList.remove('hidden');
});

document.querySelector('.num5').addEventListener('click', () => {
    // Exibe os ramos da primeira classe
    document.querySelectorAll('.branch1').forEach((e) => e.classList.add('show'));
    // Ativa as linhas de conexão relacionadas ao primeiro nó
    document.querySelectorAll('.tectopToB1').forEach((e) => e.classList.add('activeLine'));

    const arrow3 = document.createElement('img');

    const arrow4 = document.createElement('img');

    document.body.appendChild(arrow3); // Adiciona a primeira seta ao corpo do documento
    document.body.appendChild(arrow4);

    // Exibe o botão do número 5
    document.querySelector('.num2').classList.remove('hidden');
    document.querySelector('.num6').classList.remove('hidden');
});

document.querySelector('.num2').addEventListener('click', () => {
    // Exibe os ramos da primeira classe
    document.querySelectorAll('.branch1').forEach((e) => e.classList.add('show'));
    // Ativa as linhas de conexão relacionadas ao primeiro nó
    document.querySelectorAll('.tectopToB1').forEach((e) => e.classList.add('activeLine'));
    
    const arrow5 = document.createElement('img');


    document.body.appendChild(arrow5); // Adiciona a primeira seta ao corpo do documento

    // Exibe o botão do número 5
    document.querySelector('.num1').classList.remove('hidden');
});

document.querySelector('.num6').addEventListener('click', () => {
    // Exibe os ramos da primeira classe
    document.querySelectorAll('.branch1').forEach((e) => e.classList.add('show'));
    // Ativa as linhas de conexão relacionadas ao primeiro nó
    document.querySelectorAll('.tectopToB1').forEach((e) => e.classList.add('activeLine'));

    const arrow7 = document.createElement('img');

    const arrow8 = document.createElement('img');


    document.body.appendChild(arrow7); // Adiciona a primeira seta ao corpo do documento
    document.body.appendChild(arrow8);

    // Exibe o botão do número 5
    document.querySelector('.num4').classList.remove('hidden');
    document.querySelector('.num3').classList.remove('hidden');
});

document.querySelector('.num15').addEventListener('click', () => {
    // Exibe os ramos da primeira classe
    document.querySelectorAll('.branch1').forEach((e) => e.classList.add('show'));
    // Ativa as linhas de conexão relacionadas ao primeiro nó
    document.querySelectorAll('.tectopToB1').forEach((e) => e.classList.add('activeLine'));

    const arrow9 = document.createElement('img');


    const arrow10 = document.createElement('img');


    document.body.appendChild(arrow9); // Adiciona a primeira seta ao corpo do documento
    document.body.appendChild(arrow10);

    // Exibe o botão do número 5
    document.querySelector('.num11').classList.remove('hidden');
    document.querySelector('.num14').classList.remove('hidden');
});

document.querySelector('.num11').addEventListener('click', () => {
    // Exibe os ramos da primeira classe
    document.querySelectorAll('.branch1').forEach((e) => e.classList.add('show'));
    // Ativa as linhas de conexão relacionadas ao primeiro nó
    document.querySelectorAll('.tectopToB1').forEach((e) => e.classList.add('activeLine'));

    const arrow11 = document.createElement('img');



    document.body.appendChild(arrow11); // Adiciona a primeira seta ao corpo do documento

    // Exibe o botão do número 5
    document.querySelector('.num13').classList.remove('hidden');
});

document.querySelector('.num14').addEventListener('click', () => {
    // Exibe os ramos da primeira classe
    document.querySelectorAll('.branch1').forEach((e) => e.classList.add('show'));
    // Ativa as linhas de conexão relacionadas ao primeiro nó
    document.querySelectorAll('.tectopToB1').forEach((e) => e.classList.add('activeLine'));

    const arrow13 = document.createElement('img');
    document.body.appendChild(arrow13); // Adiciona a primeira seta ao corpo do documento

    // Exibe o botão do número 5
    document.querySelector('.num12').classList.remove('hidden');
});

