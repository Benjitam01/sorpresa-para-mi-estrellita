document.addEventListener('DOMContentLoaded', (event) => {
    loadPuzzles();
});

function loadPuzzles() {
    const puzzles = [
        "¿Cuál es la capital de Francia?",
        "¿Cuánto es 8 + 7?",
        "¿Cuál es el color del cielo en un día soleado?"
    ];
    const answers = ["París", "15", "Azul"];

    const container = document.getElementById('puzzle-container');

    puzzles.forEach((puzzle, index) => {
        const div = document.createElement('div');
        div.className = 'puzzle';

        const question = document.createElement('p');
        question.innerText = puzzle;
        div.appendChild(question);

        const input = document.createElement('input');
        input.type = 'text';
        input.id = `answer-${index}`;
        input.placeholder = 'Respuesta';
        div.appendChild(input);

        container.appendChild(div);
    });

    const button = document.createElement('button');
    button.innerText = 'Verificar';
    button.onclick = () => checkAnswers(answers);
    container.appendChild(button);
}

function checkAnswers(answers) {
    let correct = true;
    answers.forEach((answer, index) => {
        const userAnswer = document.getElementById(`answer-${index}`).value;
        if (userAnswer.toLowerCase() !== answer.toLowerCase()) {
            correct = false;
        }
    });

    if (correct) {
        revealMessage();
    } else {
        alert('Algunas respuestas son incorrectas, ¡intenta de nuevo!');
    }
}

function checkPassword() {
    const password = document.getElementById('password-input').value;
    if (password === '060922') {
        revealMessage();
    } else {
        alert('Contraseña incorrecta, ¡intenta de nuevo!');
    }
}

function revealMessage() {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('final-message').style.display = 'block';
}
