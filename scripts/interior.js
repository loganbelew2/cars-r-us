import { setInterior } from "./transient.js"

export const getInterior = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()

    let html = "<h2>interior</h2>"

    html += '<select id="interior">'
    html += '<option value="0">Select a interior</option>'

    const arrayOfOptions = interiors.map( (interior) => {
            return `<option value="${interior.id}">${interior.seatOption}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}



const interiorHandler = function (event) {
    if(event.target.id === 'interior')
    setInterior(event.target.value)
}

document.addEventListener("change", interiorHandler)


