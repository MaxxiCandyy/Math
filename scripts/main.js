const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const question = document.querySelector("#mainbody");
const nextBtn = document.querySelector("#nextBtn");
const checkBtn = document.querySelector("#checkBtn");
let scoreDisplay = document.querySelector("#subtitle");
let firstNum, secondNum, isTrue = true, answer, currentOperator, currentScore = 0, currentNumberOfQuestions = 0, displayScore, userAnswer;

function randomGenerator(shouldBeProper, operation) {
    if (shouldBeProper) {
        while (isTrue) {
            firstNum = Math.floor(Math.random() * 101);
            secondNum = Math.floor(Math.random() * 101);
            if (firstNum > secondNum) {
                isTrue = false;
                let finalEquation = `${firstNum} ${operation} ${secondNum}`
                question.textContent = finalEquation;
                answer = eval(finalEquation)
            }
        }
    } else {
        firstNum = Math.floor(Math.random() * 101);
        secondNum = Math.floor(Math.random() * 101);
        let finalEquation = `${firstNum} ${operation} ${secondNum}`
        question.textContent = finalEquation;
        answer = eval(finalEquation)
    }
}

function selectGame(num) {
    checkBtn.disabled = false;
    nextBtn.disabled = true;
    currentOperator = num;
    if (document.querySelector("#floatingInput").value == "") {
        const alert = (message, type) => {
            const wrapper = document.createElement('div')
            wrapper.innerHTML = [
                `<div id="deleteMe" class="alert alert-${type} alert-dismissible" role="alert">`,
                `   <div>${message}</div>`,
                '</div>'
            ].join('')

            alertPlaceholder.append(wrapper)
        }
        setTimeout(() => { document.querySelector("#deleteMe").remove(); }, 1000)
        alert("Please input your name.", 'warning')
        return;
    }
    const textName = document.querySelector("#floatingInput").value;
    document.querySelector("#title").textContent = textName;
    switch (num) {
        case 0:
            randomGenerator(false, "+")
            break;
        case 1:
            randomGenerator(true, "-")
            break;
        case 2:
            randomGenerator(false, "*")
            break;
        case 3:
            randomGenerator(true, "/")
            break;
    }
    document.querySelector("#titlecard").style.display = "none"
    document.querySelector("#maincard").style.display = "inline"
}

function checkAnswer() {
    userAnswer = document.querySelector("#answerInput").value;
    if (userAnswer == answer) {
        alert("Correct Answer!");
        currentScore++;
    } else {
        alert("Wrong Answer!")
        alert(`The answer is ${answer}`)
    }
    checkBtn.disabled = true;
    nextBtn.disabled = false;
    currentNumberOfQuestions++;
    scoreDisplay = `${currentScore}/${currentNumberOfQuestions}`
    subtitle.textContent = scoreDisplay;
}

function nextQuestion() {
    switch (currentOperator) {
        case 0:
            randomGenerator(false, "+")
            break;
        case 1:
            randomGenerator(true, "-")
            break;
        case 2:
            randomGenerator(false, "*")
            break;
        case 3:
            randomGenerator(true, "/")
            break;
    }
    checkBtn.disabled = false;
    nextBtn.disabled = true;
    userAnswer = document.querySelector("#answerInput").value = "";
}