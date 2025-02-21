const colors = ["red","green","blue","pink","olive","yellow"]

const btn = document.getElementById('btn')
const color = document.querySelector('.colorPan')

btn.addEventListener('click', function(){
    let randomColor = pickRandomColor()
    // console.log(randomColor);    
    color.textContent = colors[randomColor]
    document.body.style.backgroundColor = colors[randomColor]
})

function pickRandomColor(){
    return Math.floor(Math.random() * colors.length)
}