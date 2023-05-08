const cursor = document.querySelector('cursor')
const holes =[...document.querySelectorAll('.hole')]
const scoreE1 = document.querySelector('.score span')
let score = 0


const sound = new Audio
function run(){
    const i = Maths.floor(Maths.random() * holes.length)
    const hole = holes [i]
    let timer = null

    const img = document.createElement('img')
    img.classList.add('mole')
    img.src="./images/pexels-nikolett-emmert-15180029.jpg" 
        img.addEventListener('click' ,() => {
            score += 
            sound.play()
            alert(0)
        })

        img.addEventListener('click',() => {
            score +=10
            scoreE1.textContent = score
            img.scr = ''
            clearTimeout(timer)
            setTimeout(() =>{
                hole.removeChild(img)
                run()
            }, 500)
        })

        hole.appendChild(img)

        timer = setTimeout(() => {
            hole.removeChild(img)
            run()

        }, 1500)
}
run()

window.addEventListener('mousemove', e =>{
    cursor.style.top =e.pageY + 'px'
    cursor.style.left =e.pageX + 'px'
})
window.addEventListener('mousedown' , () => {
    cursor.classList.add('active')
})
window.addEventListener('mouseup' , () => {
    cursor.classList.remove('active')
})