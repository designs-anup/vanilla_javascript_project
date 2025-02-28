// console.log("welcome to code Accordion");
/*
//using selectors inside the element
const questions = document.querySelectorAll('.question')

questions.forEach(function(que){
    console.log(que);
    // console.log(que.querySelector('.question-button'));
    const btn = que.querySelector('.question-button')
    
    btn.addEventListener('click', function(){
        que.classList.toggle('show-text')
    })
})
*/

// traversing the dom

const btns = document.querySelectorAll('.question-button')
// console.log(btns);

btns.forEach(function(btn){
    // console.log(btn);
    btn.addEventListener('click', function(e){
        // console.log(e.currentTarget.parentElement.parentElement);
        e.currentTarget.parentElement.parentElement.classList.toggle('show-text')
    })
})