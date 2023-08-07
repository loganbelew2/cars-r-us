import { buttonHTML } from "./button.js"
import { getInterior } from "./interior.js"
import { orderHTML } from "./orderList.js"
import { getPaint } from "./paint.js"
import { getTechnology } from "./tech.js"
import { getWheels } from "./wheels.js"


const container = document.querySelector(".mainContainer")
const render = async () => {

    const interior =  await getInterior()
    const paint = await getPaint()
    const technology = await getTechnology()
    const wheels = await getWheels()
    const button = buttonHTML()
    const displayOrders = await orderHTML()

     let renderHTML = `
    <section id= "detailOptions">
        <article id= "Wheels">
       ${wheels}
        </article>

        <article id= "Technologies">
        ${technology}
        </article>

        <article id= "Paint">
            ${paint}
        </article>

        <article id= "Interior">
            ${interior}
        </article>

        <article>
         <br>
        ${button}
        </article>

        <div>
        <br>
        ${displayOrders}
        <br>
        </div>
    </section>`
    container.innerHTML = renderHTML
}

   document.addEventListener("newOrder", render)

render()

