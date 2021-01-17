let startButton = document.getElementById('start_button');
let playContent = document.getElementsByClassName('play_content');

startButton.addEventListener('click', () => {
    document.getElementById('start_content').style.display = 'none';
   document.getElementById('play_content').style.display = 'block';
});
let firstNumber = document.getElementById('first_number').innerHTML;
let secondNumber = document.getElementById('second_number').innerHTML;
let randomSum = document.getElementById('random_sum').innerHTML;
let quizzTimeLimit = 5000; // 5000 ms = 5s
let id;
progressBarCountDown = (quizzTimeLimit) => {
    let element = document.getElementById('progress_bar');
    let width = 100;
    id = setInterval(() => {
       if(width <= 0) {
           clearInterval(id);
           endgame();
       } else {
           width--;
           element.style.width = width + '%';
       }
    }, 5000/100);
}
let playerAns = 'none';
let trueAnswer;
increaseScore = () => {
    let currentScore = Number(document.getElementById('score').innerHTML);
    document.getElementById('score').innerHTML = ++currentScore;
}
let falseAudio = new Audio('fail_sound.mp3');
let trueAudio = new Audio('true_sound2.mp3');
firstQuizz = () => {
    let num1 = 1+Math.floor(Math.random()*9);
    let num2 = 1+Math.floor(Math.random()*9);
    let random_sum = 1+Math.floor(Math.random()*18);
    let true_sum = num1+num2;
    let r_val = [random_sum, true_sum];
    let random_res = r_val[Math.floor(Math.random()*2)];
    document.getElementById('first_number').innerHTML = num1;
    document.getElementById('second_number').innerHTML = num2;
    document.getElementById('random_sum').innerHTML = random_res;
    
    if(random_res == true_sum) {
        trueAnswer = true;
    } else trueAnswer = false; 
}
endgame = () => {
    document.getElementById('play_content').style.display = 'none';
        document.getElementById('endgame').style.display = 'block';
}
progressBarCountDown(quizzTimeLimit);
firstQuizz();
document.getElementById('wrong').addEventListener('click', () => {
    playerAns = false;
    if(trueAnswer == playerAns) {
        trueAudio.play();
        increaseScore();
        clearInterval(id);
        progressBarCountDown(quizzTimeLimit);
        firstQuizz();
    } else  {
        falseAudio.play();
        endgame();
    }
});
document.getElementById('right').addEventListener('click', () => {
    playerAns = true;
    if(trueAnswer == playerAns) {
        trueAudio.play();
        increaseScore();
        clearInterval(id);
        progressBarCountDown(quizzTimeLimit);
        firstQuizz();
    } else  {
        falseAudio.play();
        endgame();
    }
});

