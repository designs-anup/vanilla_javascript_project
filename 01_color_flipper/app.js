const animal = ["dog","elephant","fox","horse","owl"]
const hexColor = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]

const btn = document.getElementById('btn')
const btnHex = document.getElementById('btnHex')
const color = document.querySelector('.colorPan')

flipBackgroundImg = function(){
    let randomBg = pickRandomBg(animal)

    color.textContent = animal[randomBg]
    document.body.style.background = "url(../../img/"+animal[randomBg]+".jpg)"
}

flipBackgroundColor = function(){
    let hex = "#"
    
    for(let i = 0; i < 6; i++){
        // console.log("i value :", i);
        hex += hexColor[pickRandomBg(hexColor)]
    }

    // console.log("hex : ", hex);
    color.textContent = hex
    document.body.style.background = hex
}

function pickRandomBg(item){
    return Math.floor(Math.random() * item.length)
}



btn.addEventListener('click', flipBackgroundImg)
btnHex.addEventListener('click', flipBackgroundColor)
