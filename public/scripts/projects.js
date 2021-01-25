function fetchProjects(){
    const projectDiv = document.getElementById("projectDiv")
    console.log(projectDiv)

    fetch('/projects')
        .then(v => v.json())
        .then(response => {
            console.log(response)

            response.forEach(element => {
                let newDiv = document.createElement("div")
                newDiv.className = "projectBox appear"
                newDiv.innerHTML = `
                <img class="projectImage" src="${element.img}">
                <h3 class="projectTitle">${element.title}</h3>
                <a href="${element.url}" target="_blank"> <button class="projectButton">More info</button></a>
                `

                projectDiv.append(newDiv)
            });
        })
}

window.onload = () => {
    fetchProjects()
}