window.addEventListener("load",()=>{
    let littleBoxes = document.querySelector("#littlebox")
    let body = document.body
    littleBoxes.addEventListener("mousedown",(ev)=>{
        window.addEventListener("mousemove",(ev)=>{
            littleBoxes.style.left = `${ev.x - 10}px`
            littleBoxes.style.top = `${ev.y}px`
        })
    })
})
window.addEventListener("mouseup",(ev)=>{
    console.log("click event fired");
    window.removeEventListener("mousemove",(ev)=>{
        console.log("done");
    })
})

/* let blah = new HTMLDivElement()
    blah.mo */