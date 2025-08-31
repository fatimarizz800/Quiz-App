var questions = [
    {
        question: "HTML Stands For _________",
        options: [
            "Anchor Text Language",
            "HTML",
            "Case Cading Style Sheet",
            "HyperText markup language",
        ],
        correctAns: "HyperText markup language",
    },
    {
        question: "CSS Stands For _________",
        options: [
            "Casecading Style Sheet",
            "Java",
            "Ram",
            "Hypertext markup language",
        ],
        correctAns: "Casecading Style Sheet",
    },
    {
        question: "JS Stands For _________",
        options: ["Java Style", "Java Script", "Script", "Script Src"],
        correctAns: "Java Script",
    },
    {
        question: "DOM Stands For _________",
        options: ["Document Object Model", "html", "Css", "Java"],
        correctAns: "Document Object Model",
    },
    {
        question: "RAM Stands For _________",
        options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
        correctAns: "Random Acccess Memory",
    },
    {
        question: "ROM Stands For _________",
        options: [
            "Hyper Text Markup Language",
            "html",
            "HTml",
            "Read Only Memory",
        ],
        correctAns: "Read Only Memory",
    },
    {
        question: "RAM Stands For _________",
        options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
        correctAns: "Random Acccess Memory",
    },
]

var currentQuestion=document.getElementById("currentQuestion")
var totalQuestion=document.getElementById("totalQueston")
var currentIndex= 0
var question=document.getElementById("question")
var option=document.getElementById("answerbutton")

function ShowQuestion() {
    currentQuestion.innerHTML=currentIndex + 1
    totalQuestion.innerHTML=questions.length
    question.innerHTML=questions[currentIndex].question
    for (var i=0; i<questions[currentIndex].options.length;i++) {
        option.innerHTML +=`<button class="btn">${questions[currentIndex].options[i]}</button>`
    }
}
ShowQuestion()
function Nextbtn() {
    option.innerHTML=""
currentIndex=currentIndex + 1 
ShowQuestion()

}