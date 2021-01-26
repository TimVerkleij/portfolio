function fetchLanguagesAndFramworks(){
    const languageDiv = document.getElementById("languageDiv")

    fetch('/languagesAndFrameworks')
        .then(v => v.json())
        .then(response => {

            response.forEach(element => {
                let newDiv = document.createElement("div")
                newDiv.className = "frameworkBox appear"
                newDiv.innerHTML = `
                <img class="languageImage" src="${element.img}">
                <h3 class="languageTitle">${element.title}</h3>
                
                `
// {/* <a href="${element.url}" target="_blank"> <button class="projectButton">More info</button></a> */}
                languageDiv.append(newDiv)
            });
        })
}

window.onload = () => {
    fetchLanguagesAndFramworks()
    fetchProjects()
}