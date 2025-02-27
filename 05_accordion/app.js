// console.log("welcome to code Accordion");

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



// traversing the dom
