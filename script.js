function addTask() {
    const adding = document.getElementById('insert')
    const newElement = document.createElement('li')
    const listing = document.getElementById('tasklist')
    newElement.setAttribute("onclick","clicked(this)")
    if (adding.value.trim() === '') return alert('Insira uma palavra na lista para adicionar!')
    newElement.innerHTML +=`<p class= "paragraph" onclick="clicked(this)">${adding.value}</p>`+"<button class= 'xbtn' onclick='remove(this)' >X</button>"+"<button class= 'editbtn' onclick='edit(this)'>Editar</button>"
    listing.appendChild(newElement)
    adding.value = ''
}

document.addEventListener('keydown', function (event) {
    const adding = document.querySelector('#insert')
    const listing = document.querySelector('#tasklist')
    if (event.key === 'Enter' && adding.value.trim() === '')
        return alert('Insira uma palavra na lista para adicionar!'), adding.value = ""
    const newElement = document.createElement('li')
    if (event.key === 'Enter')
        return newElement.innerHTML += `<p class= "paragraph" onclick="clicked(this)">${adding.value}</p>` + "<button class= 'xbtn' onclick='remove(this)'>X</button>" + "<button class= 'editbtn' onclick='edit(this)'>Editar</button>", adding.value = "",
        listing.appendChild(newElement)
})


function remove(element) {
    element.parentElement.remove()
}

function deleteAllTasks() {
    const existingList = document.querySelector('#tasklist')
    existingList.innerHTML = ''
}

function clicked(element) {
    element.classList.toggle("checked")
}

function edit(element){
    const edition = window.prompt('Digite o seu novo texto.', element.parentElement.firstChild.innerHTML).trim()
    if (edition ==="" || edition === null){
        alert("Inválido. Digite uma palavra para prosseguir.") 
    } else {
        element.parentElement.innerHTML =`<p class= "paragraph" onclick="clicked(this)">${edition}</p>` 
        + "<button class= 'xbtn' onclick='remove(this)'>X</button>" + "<button class= 'editbtn' onclick='edit(this)'>Editar</button>"}
}









