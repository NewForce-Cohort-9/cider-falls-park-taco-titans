import { Services } from "./services.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <section class="detail--column list details__services">
        <h2>Services:</h2>
        ${Services()}
    </section>
</article>


`

mainContainer.innerHTML = applicationHTML