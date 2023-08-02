const formE1 = document.getElementById("form");
const questionE1 = document.getElementById('questions');
const inputE1 = document.getElementById("input");
const scoreE1 = document.getElementById("score")
const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

questionE1.innerText = `What is ${num1} multiply by ${num2}`
scoreE1.innerText = `score: ${score}`
const correctAns = num1 * num2;
let score = JSON.parse(localStorage.getItem("score"));
formE1.addEventListener('submit', ()=>{
    const userAns = +inputE1.value;
    if(userAns === correctAns){
        score++;
        updateLocalStorage()
    }else{
        score--;
        updateLocalStorage()
    }
})
function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}