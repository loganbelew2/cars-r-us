const transientState = {
    "id": 0,
    "interiorId": 0,
    "paintId": 0,
    "wheelId": 0,
    "technologyId": 0
}
//setter functions with one param to change transient state values
export const setInterior = (chooseInterior) => {
    transientState.interiorId = parseInt(chooseInterior)
    console.log(transientState)
}

export const setPaint = (choosePaint) => {
    transientState.paintId = parseInt(choosePaint)
    console.log(transientState)
}

export const setWheels = (chooseWheels) => {
    transientState.wheelId = parseInt(chooseWheels)
    console.log(transientState)
}

export const setTechnology = (chooseTechnology) => {
    transientState.technologyId = parseInt(chooseTechnology)
    console.log(transientState)
}
//function to stringify transient state and send to hosted api
export const placeOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/Json"
        },
        body: JSON.stringify(transientState)
    }

    //make variable to post transient state to hosted api
    const response = await fetch("http://localhost:8088/orders",postOptions)

    //create custom event to dispatch when button is clicked
    const customEvent = new CustomEvent("newOrder")
    document.dispatchEvent(customEvent)
}