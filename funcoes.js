function buscar(button) {
    const x = button.value
    if (x.length > 2) {
        alert(`A busca por "${x}" foi bem sucedida!`)
    } else {
        alert(`Digite no minimo 3 caracteres.`)
    }
}

function changeSelection(buttonClicked, otherButtons) {

    const elements = document.getElementsByClassName(otherButtons)
    
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "white"
        elements[i].style.fontWeight = "normal"
    }
        
    document.getElementById(buttonClicked).style.backgroundColor = "#78788a1f";
    document.getElementById(buttonClicked).style.fontWeight = "bold";
}