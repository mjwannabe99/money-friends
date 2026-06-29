// script.js

let currentQuestion = 0;
let score = 0;
let quiz = [];

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const finishScreen = document.getElementById("finish-screen");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const resultEl = document.getElementById("result");

const progressEl = document.getElementById("progress");
const progressBar = document.getElementById("progressBar");
const scoreEl = document.getElementById("score");
const finalScoreEl = document.getElementById("finalScore");

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);

function startGame(){

    quiz = [...questions];

    shuffle(quiz);

    currentQuestion = 0;
    score = 0;

    startScreen.classList.add("hidden");
    finishScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");

    updateScore();

    loadQuestion();

}

function loadQuestion(){

    if(currentQuestion >= quiz.length){

        finishGame();
        return;

    }

    const q = quiz[currentQuestion];

    progressEl.innerText =
        `문제 ${currentQuestion+1} / ${quiz.length}`;

    progressBar.style.width =
        `${((currentQuestion)/quiz.length)*100}%`;

    questionEl.innerText = q.question;

    resultEl.innerHTML = "";

    choicesEl.innerHTML = "";

    q.choices.forEach(choice=>{

        const btn=document.createElement("button");

        btn.className="choice";

        btn.innerHTML=choice;

        btn.onclick=()=>checkAnswer(btn,choice);

        choicesEl.appendChild(btn);

    });

}

function checkAnswer(button,answer){

    const q=quiz[currentQuestion];

    document.querySelectorAll(".choice")
    .forEach(btn=>btn.disabled=true);

    if(answer===q.answer){

        score++;

        button.classList.add("correct");

        resultEl.innerHTML="🎉 정답!";

        resultEl.style.color="#16a34a";

    }else{

        button.classList.add("wrong");

        resultEl.innerHTML=
        `❌ 정답은 <b>${q.answer}</b>`;

        resultEl.style.color="#dc2626";

        document.querySelectorAll(".choice").forEach(btn=>{

            if(btn.innerText===q.answer){

                btn.classList.add("correct");

            }

        });

    }

    updateScore();

    setTimeout(()=>{

        currentQuestion++;

        loadQuestion();

    },1200);

}

function updateScore(){

    scoreEl.innerHTML=`⭐ ${score}`;

}

function finishGame(){

    gameScreen.classList.add("hidden");

    finishScreen.classList.remove("hidden");

    progressBar.style.width="100%";

    const percent=
        Math.round(score/questions.length*100);

    let message="👍 잘했어요!";

    if(percent===100){

        message="👑 완벽해요!";

    }else if(percent>=90){

        message="🥇 훌륭해요!";

    }else if(percent>=70){

        message="🥈 아주 잘했어요!";

    }

    finalScoreEl.innerHTML=`
        ${message}<br><br>
        ${score} / ${questions.length} 문제 정답<br><br>
        ${percent}점
    `;

}

function shuffle(array){

    for(let i=array.length-1;i>0;i--){

        const j=Math.floor(Math.random()*(i+1));

        [array[i],array[j]]=[array[j],array[i]];

    }

}
