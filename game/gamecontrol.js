/* let ball = document.getElementById("ball")
let controlspace = document.getElementById("controlspace")
const tracker = document.getElementById("tracker")

controlspace.addEventListener("dragend",()=>{})

controlspace.addEventListener("drag",()=>{
    let size = 30
    for(let i = 0;i <= 12;i++){
        let newtrack = document.createElement("div")
        newtrack.classList.add("trackball")
        newtrack.style.width = size+"px"
        newtrack.style.height = size+"px"
        tracker.appendChild(newtrack)
        size = size - 2
    }
})
 */
window.addEventListener("load",()=>{
    let ball = document.getElementById("ball")
    let num = 50
    let degg = 22/7
    let nn = 0
    let xpos = ball.getBoundingClientRect().x
    let ypos = ball.getBoundingClientRect().y
    for (let index = 0; index < num; index++) {
        xpos =+ degg
        ypos =+ degg
        ball.style.top = ypos+"px"
        ball.style.left = xpos+"px"
        console.log(ball.style.top)
        console.log(ball.style.left)
    }
})
