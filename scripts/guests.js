import { getGuests, getDestinations } from "./database.js";

const guests = getGuests()
const destinations = getDestinations()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "guest") {
            for (const guest of guests) {
                if (parseInt(itemClicked.dataset.id) === guest.id) {
                    for (const destination of destinations) {
                        if (parseInt(itemClicked.dataset.destination) === destination.id) {
                            window.alert(`${itemClicked.dataset.name} is currently at the ${destination.name} and is holding a ${guest.weapon}.`)
                        }
                    }
                }
            }
        }
    }
)

export const guestList = () => {
    let html = "<ul>"
    for (const guest of guests) {
        html += `<li data-type="guest" data-id="${guest.id}" data-destination="${guest.destinationId}" data-name="${guest.name}">${guest.name}</li>`
    }
    html += "</ul>"
    return html
}