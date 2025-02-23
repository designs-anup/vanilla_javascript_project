// console.log("welcome to counter");

let counter = 0

const counterValue = document.getElementById('value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function(btn){
    // console.log(btn);

    // console.log("btn styles : ",btnStyle);

    btn.addEventListener('click', function(e){
        let btnStyle = e.target.classList

        if(btnStyle.contains('increase')){
            // console.log("increase counter value : ", counter);
            counter ++
        }
        if(btnStyle.contains('decrease')){
            // console.log("decrease counter value : ", counter);
            counter --
        }
        if(btnStyle.contains('reset')){
            // console.log("reset counter value : ", counter);
            counter = 0
        }

        if(counter <= 1){
            counterValue.style.color = "#00ff00"
        }
        if(counter <= -1){
            counterValue.style.color = "#ff0000"
        }
        if(counter === 0){
            counterValue.style.color = "#000000"
        }

        counterValue.textContent = counter

    })    
    
})