import { Services } from "./services.js"
import { guestList } from "./guests.js"
import { attractionList } from "./attractions.js"

import { destinationsHTML } from "./destinations.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<section class="topLists">
    <section class="destinations">${destinationsHTML()}</section>
    <section> <h2 class="asideGuests">Guests:</h2>${guestList()} </section>
    </section>



    <section class="detail--column list details__services">
        <h2>Services:</h2>
        ${Services()} 
        <h2>Attractions:</h2>
        ${attractionList()} 

    

    </section>
</article>



`
mainContainer.innerHTML = applicationHTML