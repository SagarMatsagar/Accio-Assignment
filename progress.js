const prev = document.getElementById('prev')
const next = document.getElementById('next')
const progress = document.getElementById('progress')
const circles = document.querySelectorAll('.circle')

let currentActive = 1
let numofcircles = circles.length

next.addEventListener("click",()=>{
    currentActive++
    if(currentActive>numofcircles){
        currentActive=numofcircles
    }
     updateCSS()
})

prev.addEventListener("click",()=>{
    currentActive--
    if(currentActive<1){
        currentActive=1
    }
    updateCSS()
})

function enableDisable(){
    if(currentActive===1){
        prev.disabled = true
    }else if(currentActive===numofcircles){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }
}

function updateCSS(){
    for(i=0;i<numofcircles;i++){
        const circle = circles[i]

        if(i<currentActive){
            circle.classList.add("active")
        }else{
            circle.classList.remove("active")
        }
    }

    const actives = document.querySelectorAll(".active")

    const widthx = (actives.length-1)/(circles.length-1)*100
    progress.style.width = widthx + "%"
    enableDisable()
}