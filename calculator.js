// let display = document.getElementById("display")

// let buttons = Array.from(document.getElementsByClassName("btn"))

// function cliking(btn){
//     btn.addEventListener("click",(obj)=>{
//         switch(obj.target.innerText){
//             case '←':
//                 display.innerText = display.innerText.slice(0,-1)
//                 break
//             case 'C':
//                 display.innerText = ""
//                 break
//             case '=':
//                 display.innerText = eval(display.innerText)
//                  break
//             default:
//                 display.innerText = display.innerText + obj.target.innerText
//                 break
//         }
//     })
// }
// buttons.map(cliking)


let displayxyz = document.getElementById("display")

let buttonsxyz = Array.from(document.getElementsByClassName("btn"))
console.log(buttonsxyz)


// function firstFunctionxyz(btnxyz){
//     btnxyz.addEventListener("click",(xyz)=>{
//         console.log(xyz)
//         switch(xyz.target.innerText){
//             case 'C':
//                 displayxyz.innerText = ""
//                 break
//             case '←':
//                 displayxyz.innerText = displayxyz.innerText.slice(0,-1)
//                 break
//             case '=':
//                 try{
//                     displayxyz.innerText = eval(displayxyz.innerText)
                    
//                 }catch{
//                     displayxyz.innerText="Error"
//                 }
//                 break
//             default:
//                 displayxyz.innerText = display.innerText + xyz.target.innerText
//                 break
//         }
//     })
// }


console.log(buttonsxyz)

function isOpxyz(opxyz){
    if(opxyz==="+" || opxyz==='-' || opxyz==='/' || opxyz==='*')
        return true
    return false
}
function clickingxyz(clickedxyz){
    if(displayxyz.innerText===""){
        if(clickedxyz!='0'){
            displayxyz.innerText = displayxyz.innerText+clickedxyz
        }
    }
    else{
    
        var innerTextxyz = displayxyz.innerText
        var lenxyz = innerTextxyz.length

        var lastCharxyz = innerTextxyz[lenxyz-1]

        if(isOpxyz(lastCharxyz)===true){
            if(clickedxyz!='0'){
                if(isOpxyz(clickedxyz)===true){
                    displayxyz.innerText = displayxyz.innerText.slice(0,-1)
                }
                displayxyz.innerText = displayxyz.innerText+clickedxyz

            }
        }else{
            displayxyz.innerText = displayxyz.innerText+clickedxyz
        }

    }
}

function evalxyz(){
    try{
        displayxyz.innerText = eval(displayxyz.innerText)
    }catch(err){
        console.log(err)
        displayxyz.innerText="Error"
    }
}

function clearxyz(){
    displayxyz.innerText = ""
}

function backxyz(){
    displayxyz.innerText = displayxyz.innerText.slice(0,-1)
}