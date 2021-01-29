function fetchLanguagesAndFramworks(){
    const languageDiv = document.getElementById("languageDiv")

    fetch('/languagesAndFrameworks')
        .then(v => v.json())
        .then(response => {

            generateFrameworkGrid(response)
            
        })
        .then(res => showElements())

}

function generateFrameworkGrid(response){
    response.forEach(element => {
        let newDiv = document.createElement("div")
        newDiv.className = "frameworkBox appear"
        newDiv.setAttribute('onclick', 'openLanguageBox(this)')
        newDiv.innerHTML = `
        <img class="languageImage" src="${element.img}">
        <h3 class="languageTitle">${element.title}</h3>
        <p class="languageDiscriptionInvisible">${element.discription}</p>
        `
        languageDiv.append(newDiv)
    });
}