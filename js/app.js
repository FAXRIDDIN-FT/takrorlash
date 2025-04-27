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

// topshiriq 3

    const fNameEl = document.querySelector(".fname");
    const lNameEl = document.querySelector(".lname");
    const tbodyEl = document.querySelector("tbody")
    const sanbitEl =document.querySelector(".sambit")
    function sambit(){
            let tr =document.createElement("tr")
            tr.innerHTML=`
            <td>${tbodyEl.children.length + 1}</td>
            <td>${fNameEl.value}</td>
            <td>${lNameEl.value}</td>
            `
            tbodyEl.appendChild(tr)

            fNameEl.value =''
            lNameEl.value =''
        
    }
        sanbitEl.addEventListener("click" ,()=>{
            sambit()
        })

        // topshiriq 4 
            const userEl = document.querySelector(".user");
            const passwordEl = document.querySelector(".password");
            const sendEl =document.querySelector(".send")
            function foo(){
                if (userEl.value === "john32" && passwordEl.value === "123456") {
                    return "Hush kelibsiz"
                } else {
                    return "Parol yoki user hato"
                }
            }
       
            sendEl.addEventListener( "click" ,()=> {
                alert(foo())
            })
            // topshiriq 5
            function boldText(){
                let text =document.querySelector(".text")
                text.style.fontWeight = '900';
            }
            function startText(){
                let text =document.querySelector(".text")
                text.style.textAlign = 'start';
            }
            function centerText(){
                let text =document.querySelector(".text")
                text.style.textAlign = 'center';
            }
            
            function endText(){
                let text =document.querySelector(".text")
                text.style.textAlign = 'end';
            }
            function normalText(){
                let text =document.querySelector(".text")
                text.style.fontWeight = '600';
            }
            function thimText(){
                let text =document.querySelector(".text")
                text.style.color = 'red';
            }
     