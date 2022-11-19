const questions = [
    {
        question: 'De quem é a famosa frase "Penso,logo existo(Cogito,ergo sum)"?',
        alternatives: [
            {
                alternative: 'Charles Darwin',
                correct: false
            },
            {
                alternative: 'Sócrates',
                correct: false
            },
            {
                alternative: 'Karl Marx',
                correct: false
            },
            {
                alternative: 'René Descartes',
                correct: true
            }
        ]
    },
    {
        question: 'O que a palavra "legend" significa em português?',
        alternatives: [
            {
                alternative: 'Legenda',
                correct: false
            },
            {
                alternative: 'Conto',
                correct: false
            },
            {
                alternative: 'Lenda',
                correct: true
            },
            {
                alternative: 'Legionário',
                correct: false
            }
        ]
    },
    {
        question: 'Quem pintou "Guernica"?',
        alternatives: [
            {
                alternative: 'Pablo Picasso',
                correct: true
            },
            {
                alternative: 'Diego Rivera',
                correct: false
            },
            {
                alternative: 'Paul Cézanne',
                correct: false
            },
            {
                alternative: 'Tarsila do Amaral',
                correct: false
            }
        ]
    },
    {
        question: 'Em qual ordem surgiram os modelo atômicos?',
        alternatives: [
            {
                alternative: 'Thomson,Dalton,Rutherford,Bohr',
                correct: false
            },
            {
                alternative: 'Bohr,Thomson,Dalton,Rutherford',
                correct: false
            },
            {
                alternative: 'Dalton,Thomson,Rutherford,Bohr',
                correct: true
            },
            {
                alternative: 'Rutherford,Bohr,Dalton,Thomson',
                correct: false
            }
        ]
    },
    {
        question: 'Quais dos animais abaixo gruguleja?',
        alternatives: [
            {
                alternative: 'Beija-flor',
                correct: false
            },
            {
                alternative: 'Morcego',
                correct: false
            },
            {
                alternative: 'Pica-pau',
                correct: false
            },
            {
                alternative: 'Peru',
                correct: true
            }
        ]
    },
]

let index = 0, score = 0;

const tryAgainEl = document.getElementById("tryAgain");
const answersEL = document.querySelector('.answers');
const questionEl = document.getElementById('question');
const gameOverEl = document.getElementsByClassName("gameover")[0] 
const boardEL = document.getElementsByClassName('board')[0];
const counter = document.getElementById("counter");

tryAgainEl.addEventListener("click",()=>{
    gameOverEl.style.display="none";
    index = 0;
    score = 0;
    startQuiz();
})

function startQuiz() {
    counter.innerHTML=`${index + 1}/${questions.length}`
    if (index > (questions.length - 1)) {
        document.getElementById("score").innerHTML = `Acertos: ${score} de ${questions.length}`
        gameOverEl.style.display = "flex";
        return;
    }

    questionEl.innerHTML = questions[index].question;
    questions[index].alternatives.forEach(function ({ alternative, correct }) {
        const li = document.createElement("li");
        li.innerText = alternative;
        li.addEventListener('click', function () {
            boardEL.style.display = "block";
            if (correct) {
                score++;
                this.setAttribute("class", "correct");
            }

            if (!correct)
                this.setAttribute("class", "wrong");

            setTimeout(() => {
                index++;
                removeAlternatives(Array.from(answersEL.children))
                boardEL.style.display = "none";
                startQuiz();
            }, 1000)
        });
        answersEL.appendChild(li);
    })
}

function removeAlternatives(alternatives) {
    alternatives.forEach(child => {
        if(!child.classList.contains("board"))
        child.remove();
    });
}

startQuiz();


