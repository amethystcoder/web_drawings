window.addEventListener("load",()=>{
    let body = document.querySelector("body")
    for (let index = 0; index < 250; index++) {
        let star = document.createElement("span")
        star.classList.add("star")
        star.style.top = Math.floor(Math.random()*window.innerHeight) + "px"
        star.style.left = Math.floor(Math.random()*window.innerWidth) + "px"
        body.appendChild(star)
    }
    setInterval(()=>{
        /* for (let index = 0; index < 500; index++) {
            const rain = document.createElement("rain")
            rain.classList.add("rain")
            body.appendChild(rain)
        } */
    },300)
})