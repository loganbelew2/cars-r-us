
//function to produce order html
export const orderHTML = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=interior&_expand=paint&_expand=technology&_expand=wheel")
    const orders = await response.json()
    let html = ""

    orders.map(
        (order) => {
            let prices = order.wheel.price + order.paint.price + order.interior.price + order.technology.price
            // To automatically format the number as currency
         let priceTocurrency = prices.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })

            html += ` order ${order.id} cost ${priceTocurrency}`
        }
    )
    return html

}