const panel1 = document.getElementById('panel-1')
const panel2 = document.getElementById('panel-2')
const panel3 = document.getElementById('panel-3')
const panel4 = document.getElementById('panel-4')
const panel5 = document.getElementById('panel-5')

function panelRemoveClass(){
    panel1.classList.remove("active")
    panel2.classList.remove("active")
    panel3.classList.remove("active")
    panel4.classList.remove("active")
    panel5.classList.remove("active")
}
function selectPanel(PanelNum){
    panelRemoveClass()

    switch(PanelNum){
        case 1:
            panel1.classList.add("active")
            break;
        case 2:
            panel2.classList.add("active")
            break;
        case 3:
            panel3.classList.add("active")
            break;
        case 4:
            panel4.classList.add("active")
            break;
        default:
            panel5.classList.add("active")
            break;
    }
}