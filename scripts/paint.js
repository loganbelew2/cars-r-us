import { setPaint } from "./transient.js"

export const getPaint = async () => {
    const response = await fetch("http://localhost:8088/paints")
    const paints = await response.json()

    let html = "<h2>paint</h2>"

    html += '<select id="paint">'
    html += '<option value="0">Select a paint</option>'

    const arrayOfOptions = paints.map( (paint) => {
            return `<option value="${paint.id}">${paint.color}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}



const paintHandler = function (event) {
    if(event.target.id === 'paint' )
    setPaint(event.target.value)
}

document.addEventListener("change", paintHandler)