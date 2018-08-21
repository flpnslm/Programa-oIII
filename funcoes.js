function buscar(button) {
    const x = button.value
    if (x.length > 2) {
        alert(`A busca por "${x}" foi bem sucedida!`)
    } else {
        alert(`Digite no minimo 3 caracteres.`)
    }
}

function changeSelection(valor) {
    document.getElementById(valor).style.backgroundColor = "#78788a1f";
    document.getElementById(valor).style.fontWeight = "bold";
}