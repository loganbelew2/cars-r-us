import { setTechnology } from "./transient.js"

export const getTechnology = async () => {
    const response = await fetch("http://localhost:8088/technologies")
    const technology = await response.json()
    let html = "<h2>Technologies</h2>"

    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</option>'

    const arrayOfOptions = technology.map( (tech) => {
            return `<option value="${tech.id}">${tech.package}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}

const techHandler = function (event) {
    if(event.target.id === 'tech' )
    setTechnology(event.target.value)
}

document.addEventListener("change", techHandler)