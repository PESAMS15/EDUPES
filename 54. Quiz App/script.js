const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Who is the father of computer?",
        a: "Albert Einstein",
        b: "Christano Ronaldo",
        c: "Charles babbage",
        d: "Neil bohr",
        correct: "c",
    },
    {
        question: "The following are programming languages except?",
        a: "HTMl/CSS",
        b: "Python",
        c: "C#",
        d: "Ruby",
        correct: "a",
    },
    {
        question: "How many generations of computer do we have?",
        a: "10",
        b: "5",
        c: "9",
        d: "21st",
        correct: "b",
    },
    {
        question: "the following are container tags except?",
        a: "aside",
        b: "section",
        c: "marquee",
        d: "h1",
        correct: "c",
    },
    {
        question: "the following are input types except?",
        a: "radio",
        b: "reset",
        c: "color",
        d: "Date",
        correct: "d",
    },
    
    {
        question: "Which of the following is not used for frontend development?",
        a: "Javascript",
        b: "Angular",
        c: "SQL",
        d: "UI/UX",
        correct: "c",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
localStorage.setItem("cur", currentQuiz)
let score = 0
let  seconds = 00;
let minutes = 05
loadQuiz()
const count = setInterval(()=>{{
    seconds --
    if (seconds < 0){
        seconds =59;
        minutes--
    }
    // console.log(time);
    document.getElementById("minutes").innerText= minutes
    document.getElementById("seconds").innerText = seconds
    if(seconds == 0 && minutes == 0){
        clearInterval(count)
        localStorage.setItem("english", score)
            location.href = "../Dashboard.html"
           quiz.innerHTML = `
           <h2>Sorry you ran out of time try to be conscious with your time in the future. </h2>
           `
    }
}}, 1000)
function loadQuiz() {
   
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
            console.log(answerEl.id)
        }
    })
    return answer
}
let index = 5

 console.log(currentQuiz)
submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const answer = getSelected();
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score= score+ 10
       }

       currentQuiz++
      

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
            localStorage.setItem("science", score)
            location.href = "../Dashboard.html"
           quiz.innerHTML = `
           <h2>Your Score is ${score} </h2>
           `
           
          
       }
    }
})