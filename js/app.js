// const btnEl = document.querySelector(".btn")
    const creEl = document.querySelector("button")
    let offset = 0
    function dec(){
        offset++
    const pEl = document.createElement("p")
    pEl.innerHTML = "0"
    pEl.textContent = `${offset}`
    creEl.appendChild(pEl)
    pEl = 0 
    }

