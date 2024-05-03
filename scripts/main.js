import { guestList } from "./guests.js"

const mainContainer = document.querySelector ("#container")

const applicationHTML = `${guestList()}`

mainContainer.innerHTML = applicationHTML