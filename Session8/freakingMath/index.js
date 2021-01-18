let startButton = document.getElementById('start_button');
let playContent = document.getElementsByClassName('play_content');

startButton.addEventListener('click', () => {
    document.getElementById('start_content').style.display = 'none';
    document.getElementById('play_content').style.display = 'block';
    document.getElementById('game_setting').style.display = 'block';
    progressBarCountDown(quizzTimeLimit, 100);
    firstQuizz();
});
let firstNumber = document.getElementById('first_number').innerHTML;
let secondNumber = document.getElementById('second_number').innerHTML;
let randomSum = document.getElementById('random_sum').innerHTML;
let quizzTimeLimit = 2500; // 3000 ms = 2.5 s
let id;
// setting box 
// check easybox first

document.getElementById('easy_box').disabled = true;
scorebox = () => {
    if (document.querySelector('#score_box:checked') !== null) {
        document.getElementById('score').style.visibility = 'hidden';
    } else {
        document.getElementById('score').style.visibility = 'visible';
    }
}
timerbox = () => {
    if (document.querySelector('#timer_box:checked') !== null) {
        document.getElementById('full_progress_bar').style.visibility = 'hidden';
    } else {
        document.getElementById('full_progress_bar').style.visibility = 'visible';
    }
}
let preQuizzTimeLimit = quizzTimeLimit;
easybox = () => {
    document.getElementById('hard_box').disabled = false;
    document.getElementById('easy_box').disabled = true;
    document.getElementById('hard_box').checked = false;
    preQuizzTimeLimit = quizzTimeLimit;
    quizzTimeLimit = 2500;
}
hardbox = () => {
    document.getElementById('easy_box').disabled = false;
    document.getElementById('hard_box').disabled = true;
    document.getElementById('easy_box').checked = false;
    preQuizzTimeLimit = quizzTimeLimit;
    quizzTimeLimit = 1200;
}

let currentWidth;
let max_width;
progressBarCountDown = (quizzTimeLimit, width) => {
    max_width = width;
    let element = document.getElementById('progress_bar');
    id = setInterval(() => {
        if (width <= 0) {
            clearInterval(id);
            endgame();
        } else {
            width--;
            currentWidth = width;
            element.style.width = width + '%';
        }
    }, quizzTimeLimit / max_width);
}
let isPause = false;
pauseProgress = () => {
    clearInterval(id);
}

// get pause button
let pauseBtn = document.getElementById('pause_btn');
pauseBtn.addEventListener('click', () => {
    if (pauseBtn.firstChild.className == 'far fa-pause-circle') {
        isPause = true;
        pauseProgress();
        document.getElementById('pause_btn').innerHTML = '<i class="far fa-play-circle"></i>';
    } else {
        isPause = false;
        let quizzTimeLeft = currentWidth * preQuizzTimeLimit / max_width;
        progressBarCountDown(quizzTimeLeft, currentWidth);
        document.getElementById('pause_btn').innerHTML = '<i class="far fa-pause-circle"></i>';
    }
});

let playerAns = 'none';
let trueAnswer;
increaseScore = () => {
    let currentScore = Number(document.getElementById('score').innerHTML);
    document.getElementById('score').innerHTML = ++currentScore;
}
let falseAudio = new Audio('fail_sound.mp3');
let trueAudio = new Audio('true_sound2.mp3');
firstQuizz = () => {
    let num1 = 1 + Math.floor(Math.random() * 9);
    let num2 = 1 + Math.floor(Math.random() * 9);
    let random_sum = 1 + Math.floor(Math.random() * 18);
    let true_sum = num1 + num2;
    let r_val = [random_sum, true_sum];
    let random_res = r_val[Math.floor(Math.random() * 2)];
    document.getElementById('first_number').innerHTML = num1;
    document.getElementById('second_number').innerHTML = num2;
    document.getElementById('random_sum').innerHTML = random_res;

    if (random_res == true_sum) {
        trueAnswer = true;
    } else trueAnswer = false;
}
endgame = () => {
    document.getElementById('play_content').style.display = 'none';
    document.getElementById('endgame').style.display = 'block';
}



document.getElementById('wrong').addEventListener('click', () => {
    if (isPause == false) {
        playerAns = false;
        if (trueAnswer == playerAns) {
            trueAudio.play();
            increaseScore();
            clearInterval(id);
            progressBarCountDown(quizzTimeLimit, 100);
            firstQuizz();
        } else {
            falseAudio.play();
            endgame();
        }
    }
});
document.getElementById('right').addEventListener('click', () => {
    if (isPause == false) {
        playerAns = true;
        if (trueAnswer == playerAns) {
            trueAudio.play();
            increaseScore();
            clearInterval(id);
            progressBarCountDown(quizzTimeLimit, 100);
            firstQuizz();
        } else {
            falseAudio.play();
            endgame();
        }
    }

});

