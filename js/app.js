    const creEl = document.querySelector("button")
    let offset = 0
    creEl.addEventListener("click" ,()=>{
        dec()
    })
    creEl.addEventListener("dblclick" ,()=>{
        rest()
    })
    function dec(){
        offset++
        pEl.textContent = `${offset}`
    }
    function rest(){
        offset = 0
        pEl.textContent = `${offset}`
    }
    const pEl = document.createElement("p")
    pEl.innerHTML = "0"
    creEl.appendChild(pEl)
    // topshiriq 2
    const resumeEl = document.querySelector(".resume")
    const btn2El = document.querySelector(".btn2")
    const closebtnEl = document.querySelector(".close")
    function showresume(){
        resumeEl.classList.add("show")
    }
    function hideresume(){
        resumeEl.classList.remove("show")
    }
    btn2El.addEventListener("click" ,()=>{
        showresume()
    })
    closebtnEl.addEventListener("click" ,()=>{
        hideresume()
    })

 


