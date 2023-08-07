import { setWheels } from "./transient.js"

export const getWheels = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()
    
    let html = "<h2>Wheels</h2>"

    html += '<select id="wheel">'
    html += '<option value="0">Select a wheel</option>'

    const arrayOfOptions = wheels.map( (wheel) => {
            return `<option value="${wheel.id}">${wheel.type}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}


const wheelHandler = function (event) {
    if(event.target.id === 'wheel' )
    setWheels(event.target.value)
}

document.addEventListener("change", wheelHandler)

